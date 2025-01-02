"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CommunicationMethod {
  id: number
  name: string
  description: string
  sequence: number
  mandatory: boolean
}

const defaultMethods: CommunicationMethod[] = [
  { id: 1, name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: false },
  { id: 2, name: "LinkedIn Message", description: "Direct message on LinkedIn", sequence: 2, mandatory: false },
  { id: 3, name: "Email", description: "Send an email", sequence: 3, mandatory: false },
  { id: 4, name: "Phone Call", description: "Make a phone call", sequence: 4, mandatory: false },
  { id: 5, name: "Other", description: "Other communication method", sequence: 5, mandatory: false },
]

export default function CommunicationMethodManagement() {
  const [methods, setMethods] = useState<CommunicationMethod[]>(defaultMethods)
  const [newMethod, setNewMethod] = useState<Omit<CommunicationMethod, "id">>({
    name: "",
    description: "",
    sequence: methods.length + 1,
    mandatory: false,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewMethod((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setNewMethod((prev) => ({ ...prev, mandatory: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMethods((prev) => [
      ...prev,
      { ...newMethod, id: prev.length + 1 },
    ])
    setNewMethod({
      name: "",
      description: "",
      sequence: methods.length + 2,
      mandatory: false,
    })
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Add New Communication Method</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="name">Method Name</Label>
          <Input
            id="name"
            name="name"
            value={newMethod.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newMethod.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="sequence">Sequence</Label>
          <Input
            id="sequence"
            name="sequence"
            type="number"
            value={newMethod.sequence}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="mandatory"
            checked={newMethod.mandatory}
            onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor="mandatory">Mandatory</Label>
        </div>
        <Button type="submit">Add Method</Button>
      </form>

      <h3 className="text-xl font-semibold mb-4">Communication Methods</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Sequence</TableHead>
            <TableHead>Mandatory</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {methods.map((method) => (
            <TableRow key={method.id}>
              <TableCell>{method.name}</TableCell>
              <TableCell>{method.description}</TableCell>
              <TableCell>{method.sequence}</TableCell>
              <TableCell>{method.mandatory ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

