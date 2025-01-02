"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Calendar View</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      {/* TODO: Add logic to display communications for the selected date */}
    </div>
  )
}

