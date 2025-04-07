import { UsersClient } from "@/components/users"
import { getUsers } from "@/lib/mock-data"

export default async function UsersPage() {
  // Fetch users data
  const users = await getUsers()

  return <UsersClient initialUsers={users} />
}

