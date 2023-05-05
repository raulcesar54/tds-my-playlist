import { Roboto } from "next/font/google";
import styled, { css } from "styled-components";
import { Align } from ".";

const robotoBold = Roboto({ weight: '900', subsets: ['latin'] })
const robotoNormal = Roboto({ weight: '400', subsets: ['latin'] })

export const Header = styled.h1`
font-size: 34px;
font-family: ${robotoBold.style.fontFamily};
max-width: 449px;
text-align: center;
`
export const SubHeader = styled.h3`
color: #00000063;
font-size: 15px;
font-family: ${robotoNormal.style.fontFamily};
`

interface ContainerProps {
    align?: Align
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
    ${({ align }) => align && css`
        align-items: ${align};
    `}
    
`