"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { availableSwitches } from "@/lib/mock-data"
import type { Domain, TenantOption } from "@/lib/db/types"
import { RefreshCw } from "lucide-react"

interface DomainFormProps {
  domain: Domain | null
  tenantOptions: TenantOption[]
  onSubmit: (domainData: any) => void
  onCancel: () => void
}

export function DomainForm({ domain, tenantOptions, onSubmit, onCancel }: DomainFormProps) {
  const [formData, setFormData] = useState({
    name: domain?.name || "",
    tenant: domain?.tenant || (tenantOptions.length > 0 ? tenantOptions[0].id : ""),
    portalName: domain?.portalName || "",
    homeSwitch: domain?.homeSwitch || "",
    description: domain?.description || "",
    disabled: domain?.disabled || false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when field is edited
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Domain name is required"
    } else if (
      !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9])*(?:\.[a-zA-Z]{2,})+$/.test(
        formData.name,
      )
    ) {
      newErrors.name = "Please enter a valid domain name"
    }

    if (!formData.tenant) {
      newErrors.tenant = "Tenant is required"
    }

    if (!formData.portalName.trim()) {
      newErrors.portalName = "Portal name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await onSubmit(formData)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">
            Domain Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="example.vogatpbx.com"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tenant">
            Tenant <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.tenant} onValueChange={(value) => handleChange("tenant", value)}>
            <SelectTrigger id="tenant" className={errors.tenant ? "border-red-500" : ""}>
              <SelectValue placeholder="Select tenant" />
            </SelectTrigger>
            <SelectContent>
              {tenantOptions.map((tenant) => (
                <SelectItem key={tenant.id} value={tenant.id}>
                  {tenant.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.tenant && <p className="text-sm text-red-500">{errors.tenant}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="portalName">
            Portal Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="portalName"
            value={formData.portalName}
            onChange={(e) => handleChange("portalName", e.target.value)}
            placeholder="My Portal"
            className={errors.portalName ? "border-red-500" : ""}
          />
          {errors.portalName && <p className="text-sm text-red-500">{errors.portalName}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="homeSwitch">Home Switch</Label>
          <Select value={formData.homeSwitch} onValueChange={(value) => handleChange("homeSwitch", value)}>
            <SelectTrigger id="homeSwitch">
              <SelectValue placeholder="Select home switch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              {availableSwitches.map((switchName) => (
                <SelectItem key={switchName} value={switchName}>
                  {switchName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Enter a description for this domain"
            rows={3}
          />
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Switch
            id="disabled"
            checked={!formData.disabled}
            onCheckedChange={(checked) => handleChange("disabled", !checked)}
          />
          <Label htmlFor="disabled" className="font-normal">
            {formData.disabled ? "Domain is disabled" : "Domain is active"}
          </Label>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              {domain ? "Updating..." : "Creating..."}
            </>
          ) : domain ? (
            "Update Domain"
          ) : (
            "Create Domain"
          )}
        </Button>
      </div>
    </form>
  )
}

