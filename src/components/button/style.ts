import styled from 'styled-components'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const ButtonStyled = styled.button`
   background: #263238;
   border: none;
   color: #fff;
   padding: 10px;
   font-family: ${roboto.style.fontFamily};
   font-size: 14px;
`