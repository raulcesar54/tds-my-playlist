import { Button } from '../components/button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function redirectPage() {
    alert('ir para outra pagina')
  }
  return (
    <>
      <Button label='minha playlist' onClick={() => redirectPage()} />
      <Button label='botao com erro' error onClick={() => redirectPage()} />
    </>
  )
}
