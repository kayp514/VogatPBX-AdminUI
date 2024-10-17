'use client'

import { Table, TableBody, TableCell, TableRow, TableCaption } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const codecs = [
  {
    name: "Codec_G7221",
    value: "G7221@16000h",
    description: "audio codec G7221 (16kHz)",
    explanation: "Transcode to G7221@16000h"
  },
  {
    name: "Codec_G722.1C (32kHz)",
    value: "G7221@32000h",
    description: "audio codec G722.1C (32kHz)",
    explanation: "Transcode to G7221@32000h"
  },
  {
    name: "Codec_PCMU",
    value: "PCMU",
    description: "audio codec G.711 u-Law (PCMU, 8 kHz)",
    explanation: "Transcode to G711 u-law"
  },
  {
    name: "Codec_PCMA",
    value: "PCMA",
    description: "audio codec G.711 a-Law (PCMA, 8 kHz)",
    explanation: "Transcode to G711 a-law"
  }
]

export default function MediaCodecTable() {
  return (
    <div className="space-y-2">
      <h1 className="text-sm font-semibold">Media Codec Transcoding Options</h1>
    <Table className="p-4">
      <TableBody className="p-6">
        {codecs.map((codec) => (
          <TableRow key={codec.value}>
            <TableCell>{codec.name}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Switch id={`toggle-${codec.value}`} />
                <Label htmlFor={`toggle-${codec.value}`}>{codec.explanation}</Label>
              </div>
            </TableCell>
            <TableCell>{codec.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}