interface ButtonProps {
    label: string
    onClick: () => void
    error?: boolean
}
import { SideMenuContext } from '@/context/sideMenuContext'
import { ButtonStyled } from './style'
import { useContext } from 'react'

export function Button(props: ButtonProps) {

    return (
        <>
            <ButtonStyled disabled={props.error} onClick={props.onClick}>{props.label}</ButtonStyled>
            {props.error && <small>erro do botao</small>}
        </>
    )
}
