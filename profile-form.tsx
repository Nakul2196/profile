"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format, differenceInYears } from "date-fns"
import { useState, useEffect } from "react"

export default function Component() {
  const [date, setDate] = useState<Date | undefined>()
  const [age, setAge] = useState<number | null>(null)

  useEffect(() => {
    if (date) {
      const calculatedAge = differenceInYears(new Date(), date)
      setAge(calculatedAge)
    }
  }, [date])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-2 sm:p-4 md:p-6 lg:p-12">
      <div className="w-full max-w-6xl mx-auto">
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pb-8 pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <CardTitle className="text-2xl sm:text-3xl font-bold">Personal Profile</CardTitle>
                <p className="text-blue-100 mt-2 text-base sm:text-lg">Manage your personal information</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-4 sm:p-6 md:p-10 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-11 items-start">
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                  alt="Profile"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              <div className="flex-1 w-full space-y-8">
                <div className="space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div className="space-y-2 w-full">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                        Gender
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="dob" className="text-sm font-medium text-gray-700">
                        Date of Birth
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                            {date ? format(date, "dd-MM-yyyy") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                        Age
                      </Label>
                      <Input
                        id="age"
                        placeholder="Your Age"
                        type="number"
                        value={age ?? ""}
                        readOnly
                        onChange={(e) => setAge(Number(e.target.value))}
                        disabled
                        className="w-full rounded-lg border-gray-200 bg-gray-50/50 text-gray-500 shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Contact Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="space-y-2 w-full">
                      <Label htmlFor="primary-no" className="text-sm font-medium text-gray-700">
                        Primary Number
                      </Label>
                      <Input
                        id="primary-no"
                        placeholder="Enter primary number"
                        type="tel"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="secondary-no" className="text-sm font-medium text-gray-700">
                        Secondary Number
                      </Label>
                      <Input
                        id="secondary-no"
                        placeholder="Enter secondary number"
                        type="tel"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                        WhatsApp Number
                      </Label>
                      <Input
                        id="whatsapp"
                        placeholder="Enter WhatsApp number"
                        type="tel"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 w-full">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Primary Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="Enter your primary email"
                        type="email"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2 w-full">
                      <Label htmlFor="official-email" className="text-sm font-medium text-gray-700">
                        Official Email
                      </Label>
                      <Input
                        id="official-email"
                        placeholder="Enter your official email"
                        type="email"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Security Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 w-full">
                      <Label htmlFor="security-question" className="text-sm font-medium text-gray-700">
                        Security Question <span className="text-red-500">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm">
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

                    <div className="space-y-2 w-full">
                      <Label htmlFor="security-answer" className="text-sm font-medium text-gray-700">
                        Security Answer
                      </Label>
                      <Input
                        id="security-answer"
                        placeholder="Enter your security answer"
                        className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t border-gray-200">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg py-3 font-medium shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
                Save Changes
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg py-3 font-medium shadow-md transition-all duration-200 transform hover:scale-[1.02]"
              >
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}