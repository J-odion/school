import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Target, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <Button asChild variant="ghost" className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our School</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Little Explorer Learning Arcade is dedicated to providing a nurturing and stimulating environment where
          children can develop a love for learning that will last a lifetime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2010, Little Explorer Learning Arcade began with a simple mission: to create a school where
              children's natural curiosity is celebrated and nurtured. We believe that every child is born with an
              innate desire to explore and understand the world around them.
            </p>
            <p>
              Over the years, we have grown from a small preschool to a comprehensive educational institution serving
              students from kindergarten through middle school. Throughout our growth, we have remained committed to our
              founding principles of child-centered learning, academic excellence, and character development.
            </p>
            <p>
              Today, Little Explorer Learning Arcade stands as a beacon of educational innovation in Liberia,
              continuously adapting our teaching methods to meet the evolving needs of our students while maintaining
              our core values.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg flex items-center justify-center min-h-[300px]">
          <p className="text-gray-500">School Building Image</p>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Philosophy</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-100 p-3 rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Learning Through Discovery</h3>
                <p className="text-gray-600">
                  We believe children learn best when they actively engage with their environment and discover knowledge
                  through guided exploration.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Community of Learners</h3>
                <p className="text-gray-600">
                  We foster a collaborative environment where students, teachers, and parents work together to support
                  each child's educational journey.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Holistic Development</h3>
                <p className="text-gray-600">
                  We are committed to nurturing not just academic skills, but also social, emotional, physical, and
                  creative capabilities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Our dedicated staff brings together decades of educational experience and a passion for teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <p className="text-gray-500">Staff Photo</p>
              </div>
              <h3 className="font-medium">Staff Name</h3>
              <p className="text-sm text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We invite you to become part of the Little Explorer family. Schedule a visit to our campus to experience
          firsthand the vibrant learning environment we've created.
        </p>
        <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  )
}
