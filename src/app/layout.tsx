import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import ProfilePic from './components/ProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.site_name,
  description: 'Portfolio/Blog for ' + process.env.author,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar></NavBar>
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
