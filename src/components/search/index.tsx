import { weatherApi } from '@/service/api'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'


export function Search() {
    const [inputValue, setInputValue] = useState('')
    async function getWeatherData() {
        try {
            const data = await weatherApi.get(``, {
                params: {
                    units: 'metric', q: inputValue
                }
            })
            console.log(data)
        } catch (error) {
            alert('Cidade nao existe')
            setInputValue('')
        }
    }

    return (
        <>
            <input type="text" id='search-input' value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <button disabled={!Boolean(inputValue)} onClick={() => getWeatherData()}>
                <FiSearch />
            </button>
        </>
    )
}
