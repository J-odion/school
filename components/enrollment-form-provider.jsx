"use client"

import { createContext, useContext, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const EnrollmentFormContext = createContext({
  isFormOpen: false,
  setIsFormOpen: () => {},
})

export const useEnrollmentForm = () => useContext(EnrollmentFormContext)

export default function EnrollmentFormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfKids: "1",
    gradeLevel: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsFormOpen(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        numberOfKids: "1",
        gradeLevel: "",
      })
    }, 3000)
  }

  return (
    <EnrollmentFormContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Begin Your Enrollment Process</DialogTitle>
            <DialogDescription className="text-center">
              Fill out this form to start your child's educational journey with us.
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We've received your information and will contact you shortly to continue the enrollment process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+231 XXX XXX XXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numberOfKids">Number of Children</Label>
                <Select
                  value={formData.numberOfKids}
                  onValueChange={(value) => handleSelectChange("numberOfKids", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of children" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5+">5 or more</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gradeLevel">Current Grade Level</Label>
                <Select value={formData.gradeLevel} onValueChange={(value) => handleSelectChange("gradeLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preschool">Preschool</SelectItem>
                    <SelectItem value="kindergarten">Kindergarten</SelectItem>
                    <SelectItem value="grade1">Grade 1</SelectItem>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                    <SelectItem value="grade4">Grade 4</SelectItem>
                    <SelectItem value="grade5">Grade 5</SelectItem>
                    <SelectItem value="grade6">Grade 6</SelectItem>
                    <SelectItem value="grade7">Grade 7</SelectItem>
                    <SelectItem value="grade8">Grade 8</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Submit Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </EnrollmentFormContext.Provider>
  )
}
