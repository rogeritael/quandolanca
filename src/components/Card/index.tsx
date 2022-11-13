import { Container } from "./styles";
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { useFlashMessage } from "../../hooks/useFlashMessage";
import { api } from "../../utils/api";
import { useContext } from "react";
import { Context } from "../../context/UserContext";

interface CardProps {
    type?: number,
    isLogged?: boolean,

    title: string,
    date: string,
    id: number
}

export function Card({ type, isLogged, title, date, id }: CardProps){
    const { setFlashMessage } = useFlashMessage();
    const { isAuthenticated } = useContext(Context);

    function handleAddToMyList(id: number){
        let message = 'Adicionado com sucesso'
        let type = 'success'

        api({
            method: 'post',
            url: `/userlist/add/${id}`,
            headers: {
                authorization: JSON.parse(localStorage.getItem('token') || '{}')
            }
        })
        .then(response => {
            
        })
        .catch(err => {
            message = err.response.data.message;
            type = 'error';
        });

        setFlashMessage({message, type});
    }

    return(
        <Container type={type} onClick={() => handleAddToMyList(id)}>
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
                        {isAuthenticated && (
                            <button className="remove-button">remover <AiOutlineClose /></button>
                        )}
                    </> 
                )}
            </div>
        </Container>
    );
}