import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, Trash2 } from "lucide-react"

type Node = {
  id: string;
  type: 'allow' | 'deny';
  cidr: string;
  description: string;
}

export function AccessControlDialog() {
  const [nodes, setNodes] = useState<Node[]>([])

  const addNode = () => {
    const newNode: Node = {
      id: Date.now().toString(),
      type: 'allow',
      cidr: '',
      description: ''
    }
    setNodes([...nodes, newNode])
  }

  const updateNode = (id: string, field: keyof Node, value: string) => {
    setNodes(nodes.map(node => 
      node.id === id ? { ...node, [field]: value } : node
    ))
  }

  const deleteNode = (id: string) => {
    setNodes(nodes.filter(node => node.id !== id))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Access Control
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Add Access Control</DialogTitle>
          <p className='text-sm text-gray-500 py-2'>Access control list can allow or deny ranges of IP addresses.</p>
        </DialogHeader>
        <ScrollArea className="flex-grow">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4 text-right">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="default" className="text-right">
                Default
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select default action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deny">Deny</SelectItem>
                  <SelectItem value="allow">Allow</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" className="col-span-3" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Nodes</h4>
            <div className="relative">
              <Table>
                <TableHeader className="sticky top-0 bg-white z-10">
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>CIDR</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
              </Table>
              <ScrollArea className="h-[100px]">
                <Table>
                  <TableBody>
                    {nodes.map((node) => (
                      <TableRow key={node.id}>
                        <TableCell>
                          <Select value={node.type} onValueChange={(value) => updateNode(node.id, 'type', value as 'allow' | 'deny')}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="allow">Allow</SelectItem>
                              <SelectItem value="deny">Deny</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input value={node.cidr} onChange={(e) => updateNode(node.id, 'cidr', e.target.value)} />
                        </TableCell>
                        <TableCell>
                          <Input value={node.description} onChange={(e) => updateNode(node.id, 'description', e.target.value)} />
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => deleteNode(node.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
            <Button onClick={addNode}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Node
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}