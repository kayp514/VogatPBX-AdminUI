import { Button as ShadcnButton } from "@/components/ui/button"
import { PlusCircle, Trash2 } from "lucide-react"

type ButtonProps = React.ComponentProps<typeof ShadcnButton> & {
  onClick: () => void;
  children: React.ReactNode;
}

function CustomButton({ onClick, children, ...props }: ButtonProps) {
  return (
    <ShadcnButton onClick={onClick} {...props}>
      {children}
    </ShadcnButton>
  )
}

export function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick}>
      <PlusCircle className="mr-2 h-4 w-4" />
      Add
    </CustomButton>
  )
}

export function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick} variant="outline">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </CustomButton>
  )
}

export function AddExtensionButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick}>
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Extension
    </CustomButton>
  )
}

export function DeleteExtensionButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick} variant="outline">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Extension
    </CustomButton>
  )
}

export function AddBridgeButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick}>
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Bridge
    </CustomButton>
  )
}

export function DeleteBridgeButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick} variant="outline">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Bridge
    </CustomButton>
  )
}

export function AddGatewayButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick}>
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Gateway
    </CustomButton>
  )
}

export function DeleteGatewayButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick} variant="outline">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Gateway
    </CustomButton>
  )
}

export function AddAccessControlButton({ onClick }: { onClick: () => void }) {
  return (
    <CustomButton onClick={onClick}>
      <PlusCircle className="mr-2 h-4 w-4" />
      Add Access Control
    </CustomButton>
  )
}