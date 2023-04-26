import { Button } from "@/components/button"
import { Search } from "@/components/search"
import { SideList } from "@/components/sideList"
import { Title } from "@/components/title"
import { useSideMenu } from "@/context/sideMenuContext"
import Image from "next/image"

export default function Home() {
  const { data, getWeatherData, loading } = useSideMenu()
  function redirectPage() {
    alert('ir para outra pagina')
  }
  console.log(data.playlist)
  return (
    <>
      <div className={`${data.playlist.length ? 'hidden' : ''}  w-full md:max-w-[114px]`}>
        <Button label='minha playlist' onClick={() => redirectPage()} />
      </div>
      <div className={`${data.playlist.length ? 'hidden' : ''} w-full flex flex-col gap-16 mt-16 md:px-[80px] lg:px-[150px]`}>
        <Title title='PLAYLIST DA MINHA CIDADE' subTitle='Bem vindo, vamos buscar qual playlist ideal pra sua cidade' />
        <Search onSearch={getWeatherData} loading={loading} />
        <div className="mt-[-120px] md:mt-[-160px] m-auto pointer-events-none">
          <Image src='music-figure.svg' alt='imagem de musica' width={579} height={579} />
        </div>
      </div>
      <div className="flex"></div>
      <SideList />
    </>
  )
}
