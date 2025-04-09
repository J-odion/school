"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, GraduationCap, Users, Calendar, ArrowDown, BookOpen, Target, Award } from "lucide-react"
import ParallaxSection from "@/components/parallax-section"
import { useEnrollmentForm } from "@/components/enrollment-form-provider"
import { useEffect, useState } from "react"

export default function Home() {
  const { setIsFormOpen } = useEnrollmentForm()
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("section1")
      const section2 = document.getElementById("section2")
      const section3 = document.getElementById("section3")

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

      if (section3) {
        const rect3 = section3.getBoundingClientRect()
        setIsVisible((prev) => ({
          ...prev,
          section3: rect3.top < window.innerHeight * 0.75,
        }))
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/kid.jpg?height=1080&width=1920"
        overlayColor="rgba(0, 0, 0, 0.6)"
        speed={0.3}
      >
        <div className="flex flex-col items-center justify-center text-center h-screen">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Little Explorer <br />
            <span className="text-primary">Learning Arcade</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl">
            Nurturing curious minds and building a foundation for lifelong learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              onClick={() => setIsFormOpen(true)}
            >
              Enroll Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Link href="/fees">View Fees</Link>
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#section1" className="text-white">
              <ArrowDown className="h-8 w-8" />
            </a>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section id="section1" className="section-height bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            className={`transition-all duration-1000 transform ${isVisible.section1 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Why Choose Us</h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              At Little Explorer Learning Arcade, we provide an exceptional educational experience that nurtures your
              child's natural curiosity and love for learning.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-6">
                      <GraduationCap className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Quality Education</h3>
                    <p className="text-gray-600">
                      Our curriculum is designed to foster critical thinking and creativity, preparing students for
                      future academic success.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 p-4 rounded-full mb-6">
                      <Users className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Experienced Faculty</h3>
                    <p className="text-gray-600">
                      Our teachers are highly qualified professionals who are passionate about education and creating a
                      supportive learning environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-6">
                      <Calendar className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Enrichment Activities</h3>
                    <p className="text-gray-600">
                      From arts and sports to science and technology, our extracurricular programs help students
                      discover and develop their unique talents.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <ParallaxSection
        backgroundImage="/kids.jpg?height=1080&width=1920"
        overlayColor="rgba(0, 0, 0, 0.7)"
        speed={0.4}
      >
        <div id="section2" className="flex flex-col items-center justify-center min-h-screen py-20">
          <div
            className={`transition-all duration-1000 transform ${isVisible.section2 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Our Philosophy</h2>
            <p className="text-xl text-center text-white/90 mb-16 max-w-3xl mx-auto">
              We believe in nurturing the whole child through a balanced approach to education.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
                <div className="bg-primary/20 p-4 rounded-full inline-flex mb-6">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Learning Through Discovery</h3>
                <p className="text-white/80">
                  We believe children learn best when they actively engage with their environment and discover knowledge
                  through guided exploration.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
                <div className="bg-accent/20 p-4 rounded-full inline-flex mb-6">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Community of Learners</h3>
                <p className="text-white/80">
                  We foster a collaborative environment where students, teachers, and parents work together to support
                  each child's educational journey.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
                <div className="bg-primary/20 p-4 rounded-full inline-flex mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Holistic Development</h3>
                <p className="text-white/80">
                  We are committed to nurturing not just academic skills, but also social, emotional, physical, and
                  creative capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section id="section3" className="section-height bg-gradient-to-b from-gray-100 to-white py-20">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-center">
          <div
            className={`transition-all duration-1000 transform ${isVisible.section3 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Ready to Join Our Community?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how Little Explorer Learning Arcade can provide your child with an exceptional educational
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Academic Excellence</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our students consistently achieve outstanding results in national assessments, demonstrating the
                  effectiveness of our teaching methods and curriculum.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comprehensive curriculum aligned with international standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Small class sizes ensuring personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Regular assessments and detailed progress reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">School Life</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Beyond academics, we offer a rich tapestry of experiences that contribute to your child's holistic
                  development and create lasting memories.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Diverse extracurricular activities and clubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Regular field trips and educational excursions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Annual cultural festivals and sports competitions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6"
                onClick={() => setIsFormOpen(true)}
              >
                Begin Enrollment Process <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-gray-500">
                Have questions?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="bg-primary/20 p-2 rounded-full mr-3">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <p>Established 2010</p>
            </div>
            <div className="flex items-center">
              <div className="bg-primary/20 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p>Student-Teacher Ratio 15:1</p>
            </div>
            <div className="flex items-center">
              <div className="bg-primary/20 p-2 rounded-full mr-3">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <p>Enrollment Open for 2024-2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
