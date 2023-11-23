import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-alt' });

export const metadata: Metadata = {
  title: 'Connect Camp 2024',
  description: 'Você está preparado para viver dias incríveis, cheios da presença de Deus? Serão três dias para experimentar o sobrenatural do Senhor, imersos naquilo que Deus tem para as nossas vidas!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>

      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
