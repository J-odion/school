import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Little Explorer</h3>
            <p className="text-gray-400 mb-4">
              Nurturing curious minds and building a foundation for lifelong learning.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-gray-400 hover:text-primary transition-colors">
                  Fees Structure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Kindergarten
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Elementary School
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Middle School
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  After-School Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Duport Road, Paynesvilla</p>
              <p className="mb-2">Liberia</p>
              <p className="mb-2">Hotline: +231 777 160 111</p>
              <p className="mb-2">Email: info@littleexplorer.edu</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Little Explorer Learning Arcade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
