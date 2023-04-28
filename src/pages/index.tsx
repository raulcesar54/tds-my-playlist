import { Button } from "@/components/button"
import { Search } from "@/components/search"
import { SideList } from "@/components/sideList"
import { Title } from "@/components/title"
import { useSideMenu } from "@/context/sideMenuContext"
import Image from "next/image"

export default function Home() {
  const { data, getWeatherData, loading, clearWeatherData } = useSideMenu()
  function redirectPage() {
    alert('ir para outra pagina')
  }
  const showSideList = Boolean(data.playlist.length)
  return (
    <div className={`
        w-full
        ${showSideList && 'bg-primary md:bg-white md:flex md:flex-row'}
      `}>
      <div className="px-4 flex-1 pt-[29px] md:px-[44px]" >
        <div className={`${showSideList ? 'hidden md:block md:px-[10px]' : ''} w-full md:max-w-[114px]`}>
          <Button label='minha playlist' onClick={() => redirectPage()} />
        </div>
        <div className={`${showSideList ? 'hidden md:block md:px-[10px] m-auto' : ' md:px-[80px] lg:px-[150px]'} w-full flex flex-col gap-16 mt-16`}>
          <Title title='PLAYLIST DA MINHA CIDADE' subTitle='Bem vindo, vamos buscar qual playlist ideal pra sua cidade' />
          <Search onSearch={getWeatherData} loading={loading} />
          <div className={`${showSideList ? 'md:mt-[-100px]' : 'md:mt-[-160px]'}   mt-[-120px] m-auto pointer-events-none`}>
            <Image src='music-figure.svg' alt='imagem de musica' width={579} height={579} />
          </div>
        </div>
      </div>
      {showSideList && <SideList {...data} onPress={clearWeatherData} />}
    </div>
  )
}
