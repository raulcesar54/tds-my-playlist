import { shazamApi, weatherApi } from "@/service/api";
import { createContext, useContext, useState } from "react";
import { WeatherApiProps } from "./props";

interface SideMenuProps {
    children: JSX.Element
}
interface SideMenuContextProps {
    data: {
        city: string
        temp: string
        playlist: {
            name: string
            author: string
            img: string
        }[]
    },
    loading: boolean
    getWeatherData: (inputValue: string) => void
}
const SideMenuContext = createContext({} as SideMenuContextProps)

export const SideMenuProvider = (props: SideMenuProps) => {
    const [loading, setLoading] = useState(false)
    async function getShazamPlaylist(playlistType: 'classic' | 'pop' | 'rock') {
        return await shazamApi.get('/search', {
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
                const data = await methods.classic()
                console.log({ temp: data.data })
                return
            }
            if (data.data.main.temp < 30) {
                const data = await methods.pop()
                console.log({ pop: data.data })
                return
            }

            const rock = await methods.rock()
            console.log(rock.data)
        } catch (error) {
            alert('Cidade nao existe')
        } finally {
            setLoading(false)

        }
    }


    return (
        <SideMenuContext.Provider value={{
            data: { city: '', temp: '', playlist: [] },
            getWeatherData,
            loading,
        }}>
            {props.children}
        </SideMenuContext.Provider>
    )
}

export const useSideMenu = () => useContext(SideMenuContext)