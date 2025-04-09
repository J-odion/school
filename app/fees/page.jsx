"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, DollarSign, CreditCard, Calendar, Info } from "lucide-react"
import { useEnrollmentForm } from "@/components/enrollment-form-provider"
import { useEffect, useState } from "react"
import ParallaxSection from "@/components/parallax-section"

export default function FeesPage() {
  const { setIsFormOpen } = useEnrollmentForm()
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("fees-section1")
      const section2 = document.getElementById("fees-section2")

      if (section1) {
        const rect1 = section1.getBoundingClientRect()
        setIsVisible((prev) => ({
          ...prev,
          section1: rect1.top < window.innerHeight * 0.75,
        }))
      }

      if (section2) {
        const rect2 = section2.getBoundingClientRect()
        setIsVisible((prev) => ({
          ...prev,
          section2: rect2.top < window.innerHeight * 0.75,
        }))
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/payment.jpg?height=1080&width=1920"
        overlayColor="rgba(0, 0, 0, 0.7)"
        speed={0.3}
      >
        <div className="flex flex-col items-center justify-center text-center h-screen">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            School <span className="text-primary">Fees</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl">
            Comprehensive fee structure for Nursery, Primary, Junior, and Secondary levels
          </p>
          <Button asChild variant="outline" className="text-white border-white px-4 hover:bg-white/10">
            <a href="#fees-section1">View Details</a>
          </Button>
        </div>
      </ParallaxSection>

      {/* Fees Table Section */}
      <section id="fees-section1" className="section-height bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div
            className={`transition-all duration-1000 transform ${isVisible.section1 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="mb-12">
              
              <h2 className="text-4xl font-bold text-center mb-6 gradient-text">Academic Year 2024-2025</h2>
              <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
                At Little Explorer Learning Arcade, we strive to provide quality education at competitive rates across
                all educational levels. Below is our comprehensive fee structure for the current academic year.
              </p>
            </div>

            <Card className="mb-12 border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                <CardTitle className="text-2xl">Tuition & Fees Structure</CardTitle>
                <CardDescription className="text-white/90">
                  All fees are in USD ($) for the academic year 2024-2025
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-bold">Fee Category</TableHead>
                        <TableHead className="font-bold">Nursery</TableHead>
                        <TableHead className="font-bold">Primary</TableHead>
                        <TableHead className="font-bold">Junior</TableHead>
                        <TableHead className="font-bold">Secondary</TableHead>
                        <TableHead className="font-bold">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Tuition Fees</TableCell>
                        <TableCell className="text-primary font-bold">$1500 - $1800</TableCell>
                        <TableCell className="text-primary font-bold">$1800 - $2000</TableCell>
                        <TableCell className="text-primary font-bold">$2500 - $2550</TableCell>
                        <TableCell className="text-primary font-bold">$2550 - $2750</TableCell>
                        <TableCell>Fees for education, including teaching and learning materials</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Uniform Fees</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell>Includes cost for school uniform (shirts, pants/skirts, shoes, etc.)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Activity Fees</TableCell>
                        <TableCell className="text-primary font-bold">$200</TableCell>
                        <TableCell className="text-primary font-bold">$300</TableCell>
                        <TableCell className="text-primary font-bold">$300</TableCell>
                        <TableCell className="text-primary font-bold">$300</TableCell>
                        <TableCell>Covers extracurricular activities (sports, clubs, etc.)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Books/Stationery Fees</TableCell>
                        <TableCell className="text-primary font-bold">$100</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell className="text-primary font-bold">$150</TableCell>
                        <TableCell>For books, pens, notebooks, and other stationery</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Health/Insurance Fees</TableCell>
                        <TableCell className="text-primary font-bold">$100</TableCell>
                        <TableCell className="text-primary font-bold">$100</TableCell>
                        <TableCell className="text-primary font-bold">$100</TableCell>
                        <TableCell className="text-primary font-bold">$100</TableCell>
                        <TableCell>Medical insurance and first aid services</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">PTA</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell>Cost for periodic tests and final exams</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Transportation Fees</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell className="text-primary font-bold">$250</TableCell>
                        <TableCell>For school bus or other transport services (if applicable)</TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50">
                        <TableCell className="font-bold text-lg">Total (Average)</TableCell>
                        <TableCell className="text-accent font-bold text-lg">$2,400</TableCell>
                        <TableCell className="text-accent font-bold text-lg">$2,800</TableCell>
                        <TableCell className="text-accent font-bold text-lg">$3,350</TableCell>
                        <TableCell className="text-accent font-bold text-lg">$3,550</TableCell>
                        <TableCell className="font-medium">Complete annual fees (approximate)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-lg card-hover">
                <CardHeader className="bg-primary/10">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <CardTitle>Payment Schedule</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <div>
                        <strong className="block text-lg mb-1">First Installment</strong>
                        <span className="text-gray-600">Due before the start of Term One (60% of total fees)</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <div>
                        <strong className="block text-lg mb-1">Second Installment</strong>
                        <span className="text-gray-600">Due before the start of Term Two (20% of total fees)</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        3
                      </span>
                      <div>
                        <strong className="block text-lg mb-1">Final Installment</strong>
                        <span className="text-gray-600">Due before the start of Term Three (20% of total fees)</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg card-hover">
                <CardHeader className="bg-accent/10">
                  <div className="flex items-center mb-2">
                    <CreditCard className="h-5 w-5 text-accent mr-2" />
                    <CardTitle>Payment Methods</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <div>
                        <strong className="block text-lg mb-1">Bank Transfer</strong>
                        <span className="text-gray-600">Details available from the school's finance office</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <div>
                        <strong className="block text-lg mb-1">Mobile Money</strong>
                        <span className="text-gray-600">Available through approved local providers</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <div>
                        <strong className="block text-lg mb-1">Cash Payment</strong>
                        <span className="text-gray-600">
                          Directly at the school's finance office (receipt provided)
                        </span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <ParallaxSection
        backgroundImage="/kids.jpg?height=1080&width=1920"
        overlayColor="rgba(0, 0, 0, 0.7)"
        speed={0.4}
      >
        <div id="fees-section2" className="flex flex-col items-center justify-center min-h-screen py-20">
          <div
            className={`transition-all duration-1000 transform ${isVisible.section2 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-center mb-6 text-white">Additional Information</h2>
            <p className="text-lg text-center text-white/90 max-w-3xl mx-auto mb-12">
              We offer various discounts and payment options to accommodate different family situations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-white">Discounts Available</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      A 5% discount is offered for full payment of annual fees at the beginning of the academic year.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Siblings enrolled at the school are eligible for a 10% discount on tuition fees for the second and
                      subsequent children.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Scholarships are available for academically gifted students and those with financial need.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-xl font-bold text-white">Important Notes</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Late payment fees may apply if payments are not made by the specified deadlines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>All fees are non-refundable once the term has begun.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>
                      For any questions regarding fees or payment options, please contact our finance office at +231 777
                      160 111.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6"
                onClick={() => setIsFormOpen(true)}
              >
                Begin Enrollment Process
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
