import './globals.css'

export const metadata = {
  title: 'Results Summary Component',
  description: 'Results Summary Component Challenge on Frontend Mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
