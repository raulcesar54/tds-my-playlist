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
        <div className='
        flex
        flex-row
        justify-between 
        min-h-[54px]
      bg-primary
        rounded-lg	
        pr-10
      '>
            <input
                type="text"
                id='search-input'
                value={inputValue}
                placeholder='Digite sua cidade...'
                onChange={event => setInputValue(event.target.value)}
                className='
                flex
                flex-1
                bg-transparent
                text-white
                text-[14px]
                focus:outline-none
                px-10
                '
            />
            <button disabled={!Boolean(inputValue)} onClick={() => getWeatherData()}>
                <FiSearch className='text-white'/>
            </button>
        </div>
    )
}
