import { SideMenuProvider } from '@/context/sideMenuContext'
import { GlobalStyle } from '@/styles/global'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SideMenuProvider >
      <>
        <GlobalStyle />

        <Component {...pageProps} />
      </>
    </SideMenuProvider>
  )
}
