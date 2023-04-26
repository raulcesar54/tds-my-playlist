import styled from 'styled-components'
import { Roboto } from 'next/font/google'
import { Variants } from '.'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

interface ButtonProps {
   variant?: Variants
}
export const ButtonStyled = styled.button.attrs<ButtonProps>(props => ({
   className: `
         bg-primary border-none text-white w-full p-[10px] text-[14px] 
         ${props.variant === Variants.Danger && 'bg-red-500'}
      `
}))<ButtonProps>`  
   font-family: ${roboto.style.fontFamily};
`