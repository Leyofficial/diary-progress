import type { Metadata } from 'next'
import { Inter , Montserrat } from 'next/font/google'
import './globals.css'
import React from "react";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] , variable : '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'] , variable : '--font-montserrat' })

export const metadata: Metadata = {
  title: 'My Diary | Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} flex flex-col items-center mt-10 bg-neutral-900`}>
      <Image src={'/images/logo.png'} width={200} height={200} alt={'My diary'}/>
      {children}</body>
    </html>
  )
}