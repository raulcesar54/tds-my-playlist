import { Container, Header, SubHeader } from "@/components/title/style"

export enum Align {
    left = 'start',
    center = 'center',
    right = 'end'
}
interface TitleProps {
    title: string
    subTitle?: string
    align?: Align
}

export function Title(props: TitleProps) {
    return (
        <Container align={props.align}>
            <Header>{props.title}</Header>
            <SubHeader>{props.subTitle}</SubHeader>
        </Container>
    )
}