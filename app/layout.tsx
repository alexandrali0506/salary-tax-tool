import React from 'react';

export const metadata = {
  title: 'Salary Tax Tool',
  description: 'Calculate your salary after tax across the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 