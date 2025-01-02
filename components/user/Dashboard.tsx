"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Company {
  id: number
  name: string
  lastFiveCommunications: { type: string; date: string }[]
  nextScheduledCommunication: { type: string; date: string }
}

const mockCompanies: Company[] = [
  {
    id: 1,
    name: "Acme Inc",
    lastFiveCommunications: [
      { type: "LinkedIn Post", date: "2023-09-05" },
      { type: "Email", date: "2023-08-20" },
      { type: "Phone Call", date: "2023-08-01" },
      { type: "LinkedIn Message", date: "2023-07-15" },
      { type: "Other", date: "2023-07-01" },
    ],
    nextScheduledCommunication: { type: "Email", date: "2023-09-20" },
  },
  {
    id: 2,
    name: "TechCorp",
    lastFiveCommunications: [
      { type: "Email", date: "2023-09-10" },
      { type: "LinkedIn Post", date: "2023-08-25" },
      { type: "Phone Call", date: "2023-08-10" },
      { type: "LinkedIn Message", date: "2023-07-25" },
      { type: "Other", date: "2023-07-10" },
    ],
    nextScheduledCommunication: { type: "LinkedIn Post", date: "2023-09-25" },
  },
]

export default function Dashboard() {
  const [companies, setCompanies] = useState<Company[]>(mockCompanies)
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newCommunication, setNewCommunication] = useState({
    type: "",
    date: "",
    notes: "",
  })

  const handleCompanySelect = (companyId: number) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyId)
        ? prev.filter((id) => id !== companyId)
        : [...prev, companyId]
    )
  }

  const handleCommunicationPerformed = () => {
    setIsDialogOpen(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewCommunication((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitCommunication = () => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) => {
        if (selectedCompanies.includes(company.id)) {
          return {
            ...company,
            lastFiveCommunications: [
              {
                type: newCommunication.type,
                date: newCommunication.date,
              },
              ...company.lastFiveCommunications.slice(0, 4),
            ],
          }
        }
        return company
      })
    )
    setIsDialogOpen(false)
    setNewCommunication({ type: "", date: "", notes: "" })
    setSelectedCompanies([])
  }

  return (
    <div>
      <div className="mb-4">
        <Button onClick={handleCommunicationPerformed} disabled={selectedCompanies.length === 0}>
          Communication Performed
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Select</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Last Five Communications</TableHead>
            <TableHead>Next Scheduled Communication</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(company.id)}
                  onChange={() => handleCompanySelect(company.id)}
                />
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>
                {company.lastFiveCommunications.map((comm, index) => (
                  <div key={index}>
                    {comm.type} ({comm.date})
                  </div>
                ))}
              </TableCell>
              <TableCell>
                {company.nextScheduledCommunication.type} ({company.nextScheduledCommunication.date})
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Communication</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="type">Type of Communication</Label>
              <Input
                id="type"
                name="type"
                value={newCommunication.type}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="date">Date of Communication</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={newCommunication.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                value={newCommunication.notes}
                onChange={handleInputChange}
              />
            </div>
            <Button onClick={handleSubmitCommunication}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

