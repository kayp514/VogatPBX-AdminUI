const fs = require('fs').promises;
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function ensureDirectoryExists(filePath: string): Promise<void> {
  const dirname = path.dirname(filePath);
  try {
    await fs.access(dirname);
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      await fs.mkdir(dirname, { recursive: true });
    } else {
      throw error;
    }
  }
}

async function main() {
  const tables = [
    'auth_group',
    'auth_user',
    'auth_user_groups',
    'authtoken_token',
    'django_admin_log',
    'pbx_users',
    'pbx_domains',
    'pbx_email_templates',
    'pbx_extensions',
    'pbx_gateways',
    'pbx_modules',
    'auth_permission',
    'pbx_sip_profiles',
    'pbx_vars'
  ];

  let seedData = `import { PrismaClient } from '@prisma/client';\n\n`;
  seedData += `async function seed(prisma: PrismaClient): Promise<void> {\n`;
  seedData += `  try {\n`;

  for (const table of tables) {
    console.log(`Fetching data from ${table}...`);
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM ${table}`);
    
    seedData += `    // Seeding ${table}\n`;
    seedData += `    await prisma.${table}.createMany({\n`;
    seedData += `      data: ${JSON.stringify(data, (key, value) => 
      typeof value === 'bigint' ? value.toString() : value, 2)
    },\n`;
    seedData += `      skipDuplicates: true,\n`;
    seedData += `    });\n\n`;
  }

  seedData += `    console.log('Seed data inserted successfully');\n`;
  seedData += `  } catch (error) {\n`;
  seedData += `    console.error('Error seeding database:', error);\n`;
  seedData += `  }\n`;
  seedData += `}\n\n`;
  seedData += `export default seed;\n`;

  const seedFilePath = path.join(__dirname, '..', 'prisma', 'seed.ts');
  await ensureDirectoryExists(seedFilePath);
  await fs.writeFile(seedFilePath, seedData);
  console.log('Seed file generated successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });