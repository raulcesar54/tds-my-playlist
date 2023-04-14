import { Container, Header, SubHeader } from "@/components/title/style"

interface TitleProps {
    title: string
    subTitle?: string
}

export function Title(props: TitleProps) {
    return (
        <Container>
            <Header>{props.title}</Header>
            <SubHeader>{props.subTitle}</SubHeader>
        </Container>
    )
}