import { shazamApi, weatherApi } from "@/service/api";
import { createContext, useContext, useState } from "react";
import { WeatherApiProps, ShazamApiProps } from "./props";

interface SideMenuProps {
    children: JSX.Element
}
export interface WetherDataProps {
    city: string
    temp: number
    date: Date | null
    playlist: {
        name: string
        author: string
        img: string
    }[]
}
interface SideMenuContextProps {
    clearWeatherData: () => void
    getWeatherData: (inputValue: string) => void
    data: WetherDataProps
    loading: boolean
}
const SideMenuContext = createContext({} as SideMenuContextProps)

export const SideMenuProvider = (props: SideMenuProps) => {
    const [loading, setLoading] = useState(false)
    const [wheatherData, setWhetherData] = useState<WetherDataProps>({ city: '', date: null, temp: 0, playlist: [] })
    async function getShazamPlaylist(playlistType: 'classic' | 'pop' | 'rock') {
        return await shazamApi.get<ShazamApiProps>('/search', {
            params: {
                term: playlistType
            }
        })
    }
    const methods = {
        classic: async () => {
            return await getShazamPlaylist('classic')
        },
        pop: async () => {
            return await getShazamPlaylist('pop')
        },
        rock: async () => {
            return await getShazamPlaylist('rock')
        },
    }
    async function getWeatherData(inputValue: string) {
        setLoading(true)
        try {
            const data = await weatherApi.get<WeatherApiProps>(``, {
                params: {
                    units: 'metric', q: inputValue
                }
            })
            if (data.data.main.temp < 15) {
                const shazamResponse = await methods.classic()
                setWhetherData({
                    temp: data.data.main.temp,
                    city: data.data.name,
                    date: new Date(),
                    playlist: shazamResponse.data.tracks.hits.map(track => {
                        return {
                            name: track.track.title,
                            author: track.track.subtitle,
                            img: track.track.images.background
                        }
                    })
                })
                return
            }
            if (data.data.main.temp < 30) {
                const shazamResponse = await methods.pop()
                setWhetherData({
                    temp: data.data.main.temp,
                    city: data.data.name,
                    date: new Date(),
                    playlist: shazamResponse.data.tracks.hits.map(track => {
                        return {
                            name: track.track.title,
                            author: track.track.subtitle,
                            img: track.track.images.background
                        }
                    })
                })
                return
            }

            const shazamResponse = await methods.rock()
            setWhetherData({
                temp: data.data.main.temp,
                city: data.data.name,
                date: new Date(),
                playlist: shazamResponse.data.tracks.hits.map(track => {
                    return {
                        name: track.track.title,
                        author: track.track.subtitle,
                        img: track.track.images.background
                    }
                })
            })
        } catch (error) {
            alert('Cidade nao existe')
        } finally {
            setLoading(false)

        }
    }
    function clearWeatherData() {
        const confirm = window.confirm('Tem certeza que deseja limpar a lista ?')
        if (confirm) {
            setWhetherData({ city: '', date: null, temp: 0, playlist: [] })
        }
    }

    return (    
        <SideMenuContext.Provider value={{
            getWeatherData,
            clearWeatherData,
            data: wheatherData,
            loading,
        }}>
            {props.children}
        </SideMenuContext.Provider>
    )
}

export const useSideMenu = () => useContext(SideMenuContext)