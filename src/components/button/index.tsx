
export enum Variants {
    Danger = 'danger'
}
interface ButtonProps {
    label: string
    onClick: () => void
    variant?: Variants
    error?: boolean
}
import { ButtonStyled } from './style'

export function Button(props: ButtonProps) {
    return (
        <>
            <ButtonStyled 
            variant={props.variant}
             disabled={props.error} onClick={props.onClick}>{props.label}</ButtonStyled>
            {props.error && <small>erro do botao</small>}
        </>
    )
}
