import "./globals.css"
import { Manrope, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EnrollmentFormProvider from "@/components/enrollment-form-provider"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Little Explorer Learning Arcade",
  description: "Nurturing curious minds and building a foundation for lifelong learning",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${manrope.variable} ${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <EnrollmentFormProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </EnrollmentFormProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'