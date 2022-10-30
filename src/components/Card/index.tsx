import { Container } from "./styles";
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface CardProps {
    className?: string
}

export function Card({ className }: CardProps){
    return(
        <Container className={className}>
            <figure className="cover">
                <span className="over">
                    <AiOutlinePlusCircle />
                </span>
            </figure>
            <div className="release-info">
                {className === "type2" ? (
                    <>
                        <p className="title">Resident Evil 4 Remake</p>
                        <span>Chega dia 10/02/2023</span>
                    </>
                ) : (
                    <>
                        <span>267 DIAS</span>
                        <p className="title">Resident Evil 4 Remake</p>
                    </> 
                )}
                
            </div>
        </Container>
    );
}