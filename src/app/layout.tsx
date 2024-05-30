import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/custom/Footer"
import Navbar from "@/components/custom/Navbar"
import ScheduleConversation from "@/components/custom/ScheduleConversation"
import ScrollUpButton from "@/components/custom/ScrollUpButton"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adrig Technologies | AI Development Company",
  description:
    "Revolutionize your business growth with AI automation from ADRIG AI TECHNOLOGIES. Our tailored solutions empower you to optimize operations, drive innovation, and outpace the competition. Experience exponential growth as we seamlessly integrate cutting-edge technology into your workflow, unlocking new possibilities for success.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ScheduleConversation />
        <ScrollUpButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}
