"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { DeviceSkeleton } from "@/app/ui/skeleton"


// This would typically come from an API or database
const initialDevices = [
  { id: 1, macAddress: "00:11:22:33:44:55", label: "Office Phone 1", template: "Yealink T58A", profile: "Standard", enabled: true, provisionedDate: "2023-05-15", provMethod: "TFTP", provAddress: "192.168.1.100", description: "Reception desk phone" },
  { id: 2, macAddress: "AA:BB:CC:DD:EE:FF", label: "Conference Room", template: "Polycom VVX 411", profile: "Conference", enabled: true, provisionedDate: "2023-06-01", provMethod: "HTTP", provAddress: "192.168.1.101", description: "Main conference room phone" },
  { id: 3, macAddress: "11:22:33:44:55:66", label: "Mobile Softphone", template: "Bria Mobile", profile: "Mobile", enabled: false, provisionedDate: "2023-07-10", provMethod: "HTTPS", provAddress: "pbx.example.com", description: "Sales team softphone" },
]

export default function DevicesPage() {
  const [devices, setDevices] = useState(initialDevices)
  const [selectedDevices, setSelectedDevices] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchDevices = async () => {
      await new Promise(resolve => setTimeout(resolve, 1200)) // Simulate delay
      setDevices(initialDevices)
      setLoading(false)
    }

    fetchDevices()
  }, [])

  const toggleDevice = (id: number) => {
    setSelectedDevices(prev =>
      prev.includes(id) ? prev.filter(deviceId => deviceId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedDevices(prev =>
      prev.length === devices.length ? [] : devices.map(device => device.id)
    )
  }

  const toggleEnabled = (id: number) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === id ? { ...device, enabled: !device.enabled } : device
      )
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedDevices.length === devices.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>MAC Address</TableHead>
                <TableHead>Label</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Profile</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead>Provisioned Date</TableHead>
                <TableHead>Prov. Method</TableHead>
                <TableHead>Provisioned Address</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <>
                  <DeviceSkeleton />
                  <DeviceSkeleton />
                  <DeviceSkeleton />
                </>
              ) : (
              devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedDevices.includes(device.id)}
                      onCheckedChange={() => toggleDevice(device.id)}
                    />
                  </TableCell>
                  <TableCell>{device.macAddress}</TableCell>
                  <TableCell>{device.label}</TableCell>
                  <TableCell>{device.template}</TableCell>
                  <TableCell>{device.profile}</TableCell>
                  <TableCell>
                    <Switch
                      checked={device.enabled}
                      onCheckedChange={() => toggleEnabled(device.id)}
                      className={device.enabled ? "bg-green-500" : ""}
                    />
                  </TableCell>
                  <TableCell>{device.provisionedDate}</TableCell>
                  <TableCell>{device.provMethod}</TableCell>
                  <TableCell>{device.provAddress}</TableCell>
                  <TableCell>{device.description}</TableCell>
                </TableRow>
              ))
            )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}