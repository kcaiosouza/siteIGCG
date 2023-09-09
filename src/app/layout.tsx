import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Igreja em Campina Grande',
  description: 'O Testemunho da Unidade do Corpo de Cristo nesta Cidade.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
