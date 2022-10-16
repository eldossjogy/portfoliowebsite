import '../styles/globals.css'
import { CssBaseline } from '@mui/material'
import PageProvider from "../src/PageProvider"
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { AppWrapper  } from '../context/adminContext';

function MyApp({ Component, pageProps }) {
  return (

    <SessionProvider>
      <ThemeProvider>
        <PageProvider>
          <CssBaseline />
          <AppWrapper >
            <Component {...pageProps} />
          </AppWrapper >
        </PageProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
