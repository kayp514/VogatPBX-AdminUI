
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Callflows() {
  const callflows = [
    { id: 1, name: 'Inbound Sales', extension: '1000', destination: 'Sales Queue' },
    { id: 2, name: 'Support Line', extension: '2000', destination: 'Support IVR' },
    { id: 3, name: 'After Hours', extension: '3000', destination: 'Voicemail' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Flows</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button>Create New Call Flow</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Extension</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {callflows.map((flow) => (
              <TableRow key={flow.id}>
                <TableCell>{flow.name}</TableCell>
                <TableCell>{flow.extension}</TableCell>
                <TableCell>{flow.destination}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}