"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import ParallaxSection from "@/components/parallax-section"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact-section")
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75)
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
        backgroundImage="/contact.jpg?height=1080&width=1920"
        overlayColor="rgba(0, 0, 0, 0.7)"
        speed={0.3}
      >
        <div className="flex flex-col items-center justify-center text-center h-screen">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl">
            We're here to answer any questions you may have about Little Explorer Learning Arcade
          </p>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
            <a href="#contact-section">Get In Touch</a>
          </Button>
        </div>
      </ParallaxSection>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reach out to us and we'll respond as soon as we can. We value your inquiries and feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <div>
                <Card className="border-none shadow-lg">
                  <CardHeader className="bg-primary/10">
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form and our team will get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" type="tel" placeholder="+231 XXX XXX XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardHeader className="bg-accent/10">
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Multiple ways to reach us</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600">Duport Road, Paynesvilla</p>
                        <p className="text-gray-600">Liberia</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">Hotline: +231 777 160 111</p>
                        <p className="text-gray-600">Office: +231 777 160 111</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">info@littleexplorer.edu</p>
                        <p className="text-gray-600">admissions@littleexplorer.edu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardHeader className="bg-primary/10 p-4">
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>8:00 AM - 4:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>9:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="pt-2 text-gray-600 text-sm">
                        <p>* Administrative office hours. School hours may vary.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
