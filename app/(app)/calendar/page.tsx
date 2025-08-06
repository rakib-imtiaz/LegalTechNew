"use client"

import * as React from "react"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const dates = Array.from({ length: 35 }, (_, i) => i - 4) // Dummy dates for a 5-week view

const events: { [key: number]: { title: string; color: string }[] } = {
  10: [{ title: "Midterm Exam", color: "bg-red-500" }],
  15: [{ title: "Project Due", color: "bg-blue-500" }],
  22: [{ title: "Study Session", color: "bg-green-500" }],
}

const CalendarPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Calendar</h1>
      <p className="text-gray-500 mb-8">
        Manage your academic schedule and deadlines.
      </p>

      <Card className="shadow-lg rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
            <h2 className="text-xl font-semibold">October 2024</h2>
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
          </div>
          <Button>
            <Plus className="mr-2" />
            Connect Google Calendar
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-px border-l border-t border-gray-200">
            {days.map((day) => (
              <div key={day} className="py-2 text-center font-semibold text-gray-600 border-r border-b border-gray-200">
                {day}
              </div>
            ))}
            {dates.map((date, index) => (
              <div
                key={index}
                className={`p-2 h-28 border-r border-b border-gray-200 ${
                  date <= 0 || date > 31 ? "bg-gray-50" : ""
                }`}
              >
                {date > 0 && date <= 31 && (
                  <>
                    <span className="font-semibold">{date}</span>
                    {events[date] && events[date].map((event, eventIndex) => (
                      <Badge key={eventIndex} className={`${event.color} text-white mt-1 block`}>
                        {event.title}
                      </Badge>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CalendarPage
