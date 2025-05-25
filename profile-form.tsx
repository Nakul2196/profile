"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, User } from "lucide-react"
import { format } from "date-fns"

import { useState } from "react"

export default function Component() {
  const [date, setDate] = useState<Date>(new Date(2003, 2, 1)) // March 1, 2003

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 lg:p-12">
      <div className="w-full">
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm w-full">
          <CardHeader className="text-center pb-8 pt-10">
            <CardTitle className="text-3xl font-bold text-gray-800">Personal Profile</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Profile Avatar Section */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
              {/* Name */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"

                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>

              {/* Gender */}
              <div className="space-y-3">
                <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                  Gender
                </Label>
                <Select defaultValue="female">
                  <SelectTrigger className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date of Birth */}
              <div className="space-y-3">
                <Label htmlFor="dob" className="text-sm font-medium text-gray-700">
                  Date of Birth
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd-MM-yyyy") : "01-03-2003"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        if (selectedDate) setDate(selectedDate)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Age */}
              <div className="space-y-3">
                <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                  Age
                </Label>
                <Input
                  id="age"
                  value="22"
                  disabled
                  className="rounded-md border-gray-200 bg-gray-50 text-gray-500 shadow-sm"
                />
              </div>

              {/* Primary Number */}
              <div className="space-y-3">
                <Label htmlFor="primary-number" className="text-sm font-medium text-gray-700">
                  Primary Number
                </Label>
                <Input
                  id="primary-number"
                  placeholder="Enter primary number"
                  type="tel"
                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>

              {/* Secondary Number */}
              <div className="space-y-3">
                <Label htmlFor="secondary-number" className="text-sm font-medium text-gray-700">
                  Secondary Number
                </Label>
                <Input
                  id="secondary-number"
                  placeholder="Enter secondary number"
                  type="tel"
                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-3">
                <Label htmlFor="whatsapp-number" className="text-sm font-medium text-gray-700">
                  WhatsApp Number
                </Label>
                <Input
                  id="whatsapp-number"
                  placeholder="Enter WhatsApp number"
                  type="tel"
                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>

              {/* Primary Email */}
              <div className="space-y-3">
                <Label htmlFor="primary-email" className="text-sm font-medium text-gray-700">
                  Primary Email
                </Label>
                <Input
                  id="primary-email"
                  placeholder="Enter primary email"
                  type="email"
                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>

              {/* Official Email */}
              <div className="space-y-3">
                <Label htmlFor="official-email" className="text-sm font-medium text-gray-700">
                  Official Email
                </Label>
                <Input
                  id="official-email"
                  placeholder="Enter official email"
                  type="email"
                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>

              {/* Security Question */}
              <div className="space-y-3">
                <Label htmlFor="security-question" className="text-sm font-medium text-gray-700">
                  Security Question
                </Label>
                <Select>
                  <SelectTrigger className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                    <SelectValue placeholder="Select a security question" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pet-name">What is your pet's name?</SelectItem>
                    <SelectItem value="birth-city">What city were you born in?</SelectItem>
                    <SelectItem value="school-name">What is your school's name?</SelectItem>
                    <SelectItem value="mother-maiden">What is your mother's maiden name?</SelectItem>
                    <SelectItem value="first-car">What was your first car?</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Security Answer */}
              <div className="space-y-3">
                <Label htmlFor="security-answer" className="text-sm font-medium text-gray-700">
                  Security Answer
                </Label>
                <Input
                  id="security-answer"
                  placeholder="Enter your answer"
                  className="rounded-md border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium shadow-md transition-colors duration-200">
                Save
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md py-3 font-medium shadow-md transition-colors duration-200"
                >
                Password Change
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
