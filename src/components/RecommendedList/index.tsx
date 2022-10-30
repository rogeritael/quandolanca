import { Container } from "./styles";

interface MainListContainerProps {
    title: string,
    children?: React.ReactNode
}

export function RecommendedList({ title, children }: MainListContainerProps){
    return(
        <Container>
            <h1>{title}</h1>
            <div className="card-container">
                <div className="row">
                    {children}
                </div>
            </div>
        </Container>
    );
}