interface ButtonProps {
    label: string
    onClick: () => void
    error?: boolean
}
export function Button(props: ButtonProps) {
    return (
        <>
            <button disabled={props.error} onClick={props.onClick}>{props.label}</button>
            {props.error && <small>erro do botao</small>}
        </>
    )
}