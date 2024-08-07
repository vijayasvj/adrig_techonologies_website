import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
      <head>
        <Script
          id="matomo"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = _paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//52.172.200.185/";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
              })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div id="root">
          <Navbar />
          <ScrollUpButton />
          {children}
          <ScheduleConversation />
          <Footer />
        </div>
      </body>
    </html>
  )
}
