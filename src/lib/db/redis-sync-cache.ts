import { createClient, type RedisClientType } from 'redis';
import type { DatabaseUserInput } from './types';

// Cache TTL constants (in seconds)
const CACHE_TTL = {
  USER: 3600,        // 1 hour
  CHAT: 1800,        // 30 minutes
  MESSAGES: 900,     // 15 minutes
  PRESENCE: 300      // 5 minutes
};

// Cache keys structure
export const CacheKeys = {
  USER_DATA: (tenantId: string, userId: string) => `cache:tenant:${tenantId}:user:${userId}`,
};

let redisClient: RedisClientType | null = null;

export async function getRedisClient(): Promise<RedisClientType> {
  if (!redisClient || !redisClient.isOpen) {
    redisClient = createClient({
      url: process.env.REDIS_URL
    });

    redisClient.on('error', (err) => {
      console.error('Redis Cache Error:', err);
      redisClient = null;
    });

    await redisClient.connect();
  }
  return redisClient;
}

// User Cache Operations
export async function cacheUserData(user: DatabaseUserInput) {
  try {
    const client = await getRedisClient();
    const key = CacheKeys.USER_DATA(user.tenantId, user.uid);
    
    await client.hSet(key, {
        uid: user.uid,
        tenantId: user.tenantId,
        displayName: user.displayName || '',
        email: user.email,
        avatar: user.avatar || '',
        lastSignedAt: Date.now().toString() || Date.now().toString(),
        isAdmin: user.isAdmin.toString(),
        isSuperuser: user.isSuperuser.toString(),
        isStaff: user.isStaff.toString(),
        disabled: user.disabled.toString() 
    });
    await client.expire(key, CACHE_TTL.USER);
    
  } catch (error) {
    console.error('Error caching user data:', error);
    // Don't throw - cache errors shouldn't break the app
  }
}

export async function invalidateUserCache(tenantId: string, userId: string) {
  try {
    const client = await getRedisClient();
    await client.del(CacheKeys.USER_DATA(tenantId, userId));
  } catch (error) {
    console.error('Error invalidating user cache:', error);
  }
}


// Cleanup on server shutdown
process.on('SIGTERM', async () => {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
});

export default {
  cacheUserData,
  invalidateUserCache,
  CacheKeys
};