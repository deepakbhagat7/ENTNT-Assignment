"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Company {
  id: number
  name: string
  location: string
  linkedInProfile: string
  emails: string[]
  phoneNumbers: string[]
  comments: string
  communicationPeriodicity: number
}

export default function CompanyManagement() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [newCompany, setNewCompany] = useState<Omit<Company, "id">>({
    name: "",
    location: "",
    linkedInProfile: "",
    emails: [],
    phoneNumbers: [],
    comments: "",
    communicationPeriodicity: 14,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewCompany((prev) => ({ ...prev, [name]: value }))
  }

  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "emails" | "phoneNumbers"
  ) => {
    const values = e.target.value.split(",").map((item) => item.trim())
    setNewCompany((prev) => ({ ...prev, [field]: values }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCompanies((prev) => [
      ...prev,
      { ...newCompany, id: prev.length + 1 },
    ])
    setNewCompany({
      name: "",
      location: "",
      linkedInProfile: "",
      emails: [],
      phoneNumbers: [],
      comments: "",
      communicationPeriodicity: 14,
    })
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Add New Company</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="name">Company Name</Label>
          <Input
            id="name"
            name="name"
            value={newCompany.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={newCompany.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="linkedInProfile">LinkedIn Profile</Label>
          <Input
            id="linkedInProfile"
            name="linkedInProfile"
            value={newCompany.linkedInProfile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="emails">Emails (comma-separated)</Label>
          <Input
            id="emails"
            name="emails"
            value={newCompany.emails.join(", ")}
            onChange={(e) => handleArrayInputChange(e, "emails")}
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumbers">Phone Numbers (comma-separated)</Label>
          <Input
            id="phoneNumbers"
            name="phoneNumbers"
            value={newCompany.phoneNumbers.join(", ")}
            onChange={(e) => handleArrayInputChange(e, "phoneNumbers")}
            required
          />
        </div>
        <div>
          <Label htmlFor="comments">Comments</Label>
          <Textarea
            id="comments"
            name="comments"
            value={newCompany.comments}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="communicationPeriodicity">
            Communication Periodicity (days)
          </Label>
          <Input
            id="communicationPeriodicity"
            name="communicationPeriodicity"
            type="number"
            value={newCompany.communicationPeriodicity}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit">Add Company</Button>
      </form>

      <h3 className="text-xl font-semibold mb-4">Companies List</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>LinkedIn Profile</TableHead>
            <TableHead>Emails</TableHead>
            <TableHead>Phone Numbers</TableHead>
            <TableHead>Communication Periodicity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.location}</TableCell>
              <TableCell>{company.linkedInProfile}</TableCell>
              <TableCell>{company.emails.join(", ")}</TableCell>
              <TableCell>{company.phoneNumbers.join(", ")}</TableCell>
              <TableCell>{company.communicationPeriodicity} days</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

