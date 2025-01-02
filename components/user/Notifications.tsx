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

interface Notification {
  id: number
  companyName: string
  communicationType: string
  dueDate: string
  isOverdue: boolean
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    companyName: "Acme Inc",
    communicationType: "Email",
    dueDate: "2023-09-20",
    isOverdue: true,
  },
  {
    id: 2,
    companyName: "TechCorp",
    communicationType: "LinkedIn Post",
    dueDate: "2023-09-25",
    isOverdue: false,
  },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Notifications</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-2">Overdue Communications</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Communication Type</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications
                .filter((notification) => notification.isOverdue)
                .map((notification) => (
                  <TableRow key={notification.id} className="bg-red-100">
                    <TableCell>{notification.companyName}</TableCell>
                    <TableCell>{notification.communicationType}</TableCell>
                    <TableCell>{notification.dueDate}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">Today's Communications</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Communication Type</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications
                .filter((notification) => !notification.isOverdue)
                .map((notification) => (
                  <TableRow key={notification.id} className="bg-yellow-100">
                    <TableCell>{notification.companyName}</TableCell>
                    <TableCell>{notification.communicationType}</TableCell>
                    <TableCell>{notification.dueDate}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

