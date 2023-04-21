import { weatherApi } from '@/service/api'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchProps {
    onSearch: (inputValue: string) => void
}
export function Search(props: SearchProps) {
    const [inputValue, setInputValue] = useState('')
   
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
            <button disabled={!Boolean(inputValue)} onClick={() => props.onSearch(inputValue)}>
                <FiSearch className='text-white'/>
            </button>
        </div>
    )
}
