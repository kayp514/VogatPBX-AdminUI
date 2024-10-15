import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2 } from "lucide-react"

export function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <PlusCircle className="mr-2 h-4 w-4" />
      Add
    </Button>
  )
}

export function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </Button>
  )
}

export function AddExtensionButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Extension
    </Button>
  )
}

export function DeleteExtensionButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Extension
    </Button>
  )
}

export function AddBridgeButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Bridge
    </Button>
  )
}

export function DeleteBridgeButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Bridge
    </Button>
  )
}

export function AddGatewayButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Gateway
    </Button>
  )
}

export function DeleteGatewayButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} variant="outline" size="sm">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Gateway
    </Button>
  )
}