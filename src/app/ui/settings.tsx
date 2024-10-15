
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Settings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" defaultValue="vogatPBX Inc." />
          </div>
          <div>
            <Label htmlFor="admin-email">Admin Email</Label>
            <Input id="admin-email" type="email" defaultValue="admin@vogatpbx.com" />
          </div>
          <div>
            <Label htmlFor="timezone">Timezone</Label>
            <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
          </div>
          <Button type="submit">Save Settings</Button>
        </form>
      </CardContent>
    </Card>
  )
}