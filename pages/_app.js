import '../styles/globals.css'
import { CssBaseline } from '@mui/material'
import PageProvider from "../src/PageProvider"
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (

    <SessionProvider>
      <ThemeProvider>
        <PageProvider>
          <CssBaseline />
          <Head>
            <title>Eldoss Jogy</title>
            <link rel="icon" type="image/x-png" href="./icon.png"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="Hi, I'm Eldoss Jogy." />
            <meta property="og:description" content="Eldoss Jogy's Portfolio Website" />
            <meta property="og:url" content="https://eldossjogy.vercel.app/" />
            <meta property="og:image" content="https://avatars.githubusercontent.com/u/77898541?v=4" />
          </Head>
          <Component {...pageProps} />
        </PageProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
