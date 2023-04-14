import { Button } from "@/components/button"
import { Search } from "@/components/search"
import { Title } from "@/components/title"

export default function Home() {
  function redirectPage() {
    alert('ir para outra pagina')
  }
  return (
    <>
      <Button label='minha playlist' onClick={() => redirectPage()} />
      <Title title='PLAYLIST DA MINHA CIDADE' subTitle='Bem vindo, vamos buscar qual playlist ideal pra sua cidade' />
      <Search />
    </>
  )
}
