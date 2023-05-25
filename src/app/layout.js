"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import NavbarComponent from "@/components/NavbarComponent";
import SliderComponent from "@/components/SliderComponent";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import FooterComponent from "@/components/FooterComponent";
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

const metadata = {
    title: {
        template: '%s - DinoShop'
    },
    description: " Our website is designed to provide you with comprehensive information about our exceptional product and its features.",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarComponent/>
      <SliderComponent/>
      {children}
      <FooterComponent/>
      </body>
    </html>
  )
}
