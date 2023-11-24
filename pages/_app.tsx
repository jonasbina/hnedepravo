import { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <ThemeProvider attribute="class">
      Component {...pageProps} />
    </ThemeProvider>
    )
}
