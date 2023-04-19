import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import '@/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <div className='
        px-4
        w-full
        md:px-wrapperSidePadding
        lg:px-[90px]
        pt-[29px]
      '>
        <Component {...pageProps} />
      </div>
    </>
  )
}
