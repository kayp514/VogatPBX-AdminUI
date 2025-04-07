"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { availablePlans } from "@/lib/mock-data"
import type { Tenant } from "@/lib/mock-data"
import { RefreshCw } from "lucide-react"

interface TenantFormProps {
  tenant: Tenant | null
  onSubmit: (tenantData: any) => void
  onCancel: () => void
}

export function TenantForm({ tenant, onSubmit, onCancel }: TenantFormProps) {
  const [formData, setFormData] = useState({
    name: tenant?.name || "",
    domain: tenant?.domain || "",
    plan: tenant?.plan || "Professional",
    status: tenant?.status || "active",
    usersCount: tenant?.usersCount || 0,
    extensionsCount: tenant?.extensionsCount || 0,
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
      newErrors.name = "Tenant name is required"
    }

    if (!formData.domain.trim()) {
      newErrors.domain = "Domain is required"
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(formData.domain)) {
      newErrors.domain = "Please enter a valid domain"
    }

    if (!formData.plan) {
      newErrors.plan = "Plan is required"
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
            Tenant Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Acme Corporation"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="domain">
            Domain <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center">
            <Input
              id="domain"
              value={formData.domain.split(".vogatpbx.com")[0]}
              onChange={(e) => handleChange("domain", `${e.target.value}.vogatpbx.com`)}
              placeholder="acme"
              className={`rounded-r-none ${errors.domain ? "border-red-500" : ""}`}
            />
            <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-sm text-muted-foreground">
              .vogatpbx.com
            </div>
          </div>
          {errors.domain && <p className="text-sm text-red-500">{errors.domain}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="plan">
            Plan <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.plan} onValueChange={(value) => handleChange("plan", value)}>
            <SelectTrigger id="plan" className={errors.plan ? "border-red-500" : ""}>
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              {availablePlans.map((plan) => (
                <SelectItem key={plan} value={plan}>
                  {plan}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.plan && <p className="text-sm text-red-500">{errors.plan}</p>}
        </div>

        {tenant && (
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {tenant && (
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="usersCount">Users Count</Label>
              <Input
                id="usersCount"
                type="number"
                min="0"
                value={formData.usersCount}
                onChange={(e) => handleChange("usersCount", Number.parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="extensionsCount">Extensions Count</Label>
              <Input
                id="extensionsCount"
                type="number"
                min="0"
                value={formData.extensionsCount}
                onChange={(e) => handleChange("extensionsCount", Number.parseInt(e.target.value) || 0)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              {tenant ? "Updating..." : "Creating..."}
            </>
          ) : tenant ? (
            "Update Tenant"
          ) : (
            "Create Tenant"
          )}
        </Button>
      </div>
    </form>
  )
}

