'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

type ApiEndpoint = {
  endpoint: string;
  description: string;
}

type ApiData = Record<string, unknown>

export default function ApiRootView() {
  const [apis, setApis] = useState<ApiEndpoint[]>([])
  const [selectedApiData, setSelectedApiData] = useState<ApiData | null>(null)
  const [selectedApiName, setSelectedApiName] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/v1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data: ApiEndpoint[]) => {
        setApis(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching APIs:', error)
        setError('Failed to fetch API endpoints')
        setLoading(false)
      })
  }, [])

  const handleApiClick = async (apiUrl: string, apiName: string) => {
    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: ApiData = await response.json()
      setSelectedApiData(data)
      setSelectedApiName(apiName)
    } catch (error) {
      console.error('Error fetching API data:', error)
      setSelectedApiData({ error: 'Failed to fetch API data' })
      setSelectedApiName(apiName)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading API endpoints...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen">Error: {error}</div>
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 p-4">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>API Root View</CardTitle>
            <CardDescription>List of available APIs in src/app/api/v1/</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>API Endpoint</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apis.map((api, index) => (
                    <TableRow key={index}>
                      <TableCell>{api.endpoint}</TableCell>
                      <TableCell>{api.description}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleApiClick(`/api/v1/${api.endpoint}`, api.endpoint)}>
                          View Data
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 p-4">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>{selectedApiName ? `${selectedApiName} - API Data` : 'API Data'}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full">
              {selectedApiData ? (
                <pre className="bg-gray-100 p-4 rounded-md">
                  {JSON.stringify(selectedApiData, null, 2)}
                </pre>
              ) : (
                <p>Select an API to view its data</p>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}