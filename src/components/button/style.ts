import styled from 'styled-components'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const ButtonStyled = styled.button.attrs(props => ({
   className: 'bg-primary border-none text-white w-full p-[10px] text-[14px]'
}))`  
   font-family: ${roboto.style.fontFamily};
`