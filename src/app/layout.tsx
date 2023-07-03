'use client'
import { Header } from '@/layout/header/header'
import { GlobalStyle } from '@/styles/global-styles'
import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'


export default function RootLayout({ children }:
  { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>GW CLEAN ARCH</title>
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
