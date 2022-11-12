import { Container } from "./styles";
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';

interface CardProps {
    type?: number,
    isLogged?: boolean,

    title: string,
    date: string
}

export function Card({ type, isLogged, title, date }: CardProps){
    return(
        <Container type={type} >
            <figure className="cover">
                <span className="over">
                    <AiOutlinePlusCircle />
                </span>
            </figure>
            <div className="release-info">
                {type === 2 ? (
                    <>
                        <p className="title">{title}</p>
                        <span>Chega dia {date}</span>
                    </>
                ) : (
                    <>
                        <span>{date} DIAS</span>
                        <p className="title">{title}</p>
                        {isLogged === true && (
                            <button className="remove-button">remover <AiOutlineClose /></button>
                        )}
                    </> 
                )}
            </div>
        </Container>
    );
}