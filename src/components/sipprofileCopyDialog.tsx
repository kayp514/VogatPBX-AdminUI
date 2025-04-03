"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

interface SipProfileCopyDialogProps {
  isOpen: boolean
  onClose: () => void
  profileId: string
}

export function SipProfileCopyDialog({ isOpen, onClose, profileId }: SipProfileCopyDialogProps) {
  const [newProfileName, setNewProfileName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setNewProfileName("")
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch('/api/sipProfiles/copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalProfileId: profileId,
          newProfileName: newProfileName,
        }),
      })
  
      if (!response.ok) {
        throw new Error('Failed to copy SIP profile')
      }
  
      const data = await response.json()
      toast({
        title: "Success",
        description: "SIP profile copied successfully.",
      })
      onClose()
    } catch (error) {
      console.error('Error copying SIP profile:', error)
      toast({
        title: "Error",
        description: "Failed to copy SIP profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Copy SIP Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="profile-name" className="text-right">
                New Profile Name
              </Label>
              <Input
                id="profile-name"
                className="col-span-3"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Copying..." : "Copy Profile"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}