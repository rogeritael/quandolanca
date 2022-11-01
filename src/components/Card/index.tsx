import { Container } from "./styles";
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';

interface CardProps {
    type?: number
}

export function Card({ type }: CardProps){
    return(
        <Container type={type}>
            <figure className="cover">
                <span className="over">
                    <AiOutlinePlusCircle />
                </span>
            </figure>
            <div className="release-info">
                {type === 2 ? (
                    <>
                        <p className="title">Resident Evil 4 Remake</p>
                        <span>Chega dia 10/02/2023</span>
                    </>
                ) : (
                    <>
                        <span>267 DIAS</span>
                        <p className="title">Resident Evil 4 Remake</p>
                        <button className="remove-button">remover <AiOutlineClose /></button>
                    </> 
                )}
            </div>
        </Container>
    );
}