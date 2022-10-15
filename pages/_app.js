import '../styles/globals.css'
import { CssBaseline } from '@mui/material'
import PageProvider from "../src/PageProvider"
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { AppWrapper  } from '../context/adminContext';

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
          </Head>
          <AppWrapper >
            <Component {...pageProps} />
          </AppWrapper >
        </PageProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
