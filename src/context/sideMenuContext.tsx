import { shazamApi, weatherApi } from "@/service/api";
import { createContext, useContext, useState } from "react";
import { WeatherApiProps, ShazamApiProps } from "./props";

interface SideMenuProps {
    children: JSX.Element
}
interface WetherDataProps {
    city: string
    temp: number
    playlist: {
        name: string
        author: string
        img: string
    }[]
}
interface SideMenuContextProps {
    data: WetherDataProps,
    loading: boolean
    getWeatherData: (inputValue: string) => void
}
const SideMenuContext = createContext({} as SideMenuContextProps)

export const SideMenuProvider = (props: SideMenuProps) => {
    const [loading, setLoading] = useState(false)
    const [wheatherData, setWhetherData] = useState<WetherDataProps>({ city: '', temp: 0, playlist: [] })
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


    return (
        <SideMenuContext.Provider value={{
            data: wheatherData,
            getWeatherData,
            loading,
        }}>
            {props.children}
        </SideMenuContext.Provider>
    )
}

export const useSideMenu = () => useContext(SideMenuContext)