interface ButtonProps {
    label: string
    onClick: () => void
    error?: boolean
}
import { ButtonStyled } from './style'
export function Button(props: ButtonProps) {
    return (
        <>
            <ButtonStyled disabled={props.error} onClick={props.onClick}>{props.label}</ButtonStyled>
            {props.error && <small>erro do botao</small>}
        </>
    )
}
