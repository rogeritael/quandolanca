import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import { useFlashMessage } from "../../hooks/useFlashMessage";
import { api } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/UserContext";
import Image from "next/image";
import { useConfirmModal } from "../../hooks/useConfirmModal";

interface ListProps {
    id: number,
    name: string,
    date: string
  }

interface CardProps {
    type?: number,
    title: string,
    date: string,
    id: number,
    mainCard?: boolean,
    setMainList?: any;
    mainList?: ListProps[],
    image?: string,
    setResults?: any
}

export function Card({ type, image, title, date, id, mainCard, setResults }: CardProps){
    const [daysToGo, setDaysToGo] = useState('')
    const { setFlashMessage } = useFlashMessage();
    const { setConfirmModal } = useConfirmModal();
    const [isReleased, setIsReleased] = useState(false);
    const [deleteAnimation, setDeleteAnimation] = useState(false);
    const { isAuthenticated, notifications, setNotifications, mainList, setMainList, getNotifications, generateNotifications } = useContext(Context);

    async function handleAddToMyList(id: number){

        if(!mainCard === true){
            let message = ''
            let type = 'success'

            const token = localStorage.getItem('token') || '{}';
            
            await api({
                method: 'post',
                url: `/userlist/add/${id}`,
                headers: {
                    authorization: JSON.parse(token)
                }
            })
            .then(response => {
                message = response.data.message;
                setMainList(response.data.updatedList);
            })
            .catch(err => {
                message = err.response.data.message;
                type = 'error';
            });

            setFlashMessage({message, type});
        }
    }

    async function handleRemoveRelease(id: number){
        const token = localStorage.getItem('token') || '{}';
        let message = 'Lançamento removido da sua lista'
        let type = 'success'

        await api({
            method: 'delete',
            url: `/userlist/remove/${id}`,
            headers: {
                authorization: JSON.parse(token)
            }
        })
        .then(response => {
            message = response.data.message;
            setDeleteAnimation(true);
            setTimeout(() => {
                setMainList(mainList?.filter(item => item.id !== id));
            }, 500);
        })
        .catch(err => {
            message = err.response.data.message;
            type = 'error';
            setResults(false);
        });

        setFlashMessage({message, type});
    }

    interface IConfirmation {
        id: number;
        title: string
    }

    function handleOpenConfirmation({id, title}: IConfirmation){
        setConfirmModal({
            title: `Deseja remover ${title} da sua lista?`,
            description: 'Ao fazer isso você não receberá mais notificações sobre este lançamento.',
            rejectText: 'cancelar',
            acceptText: 'remover',
            onAccept: () => handleRemoveRelease(id)
        })
    }


    useEffect(() => {
        const newdate = new Date(); 
        const current_date = Date.parse(newdate as any)
        const release_date = Date.parse(date)

        //quanto tempo falta para lançar
        if(type === 2){
            const string = date.split('-');
            const day = string[2].split('T')[0];
            const month = string[1];
            const year = string[0];
            setDaysToGo(`chega dia ${day}/${month}/${year}`)
            
        }else {
            const daysToGo = ((release_date - current_date) / 86400000).toFixed(0);
            if(parseInt(daysToGo) > 0 ){
                setDaysToGo(`faltam ${daysToGo} DIAS`);
            } else if(parseInt(daysToGo) === -0){
                setDaysToGo("lança hoje");
            }else if(parseInt(daysToGo) < 0 ){
                setIsReleased(true);
                setDaysToGo(`lançado há ${daysToGo.replace('-', '')} DIAS`);
            }
        }     
    }, []);
    
    return(
        <Container isAuthenticated={isAuthenticated} type={type} mainCard={mainCard} deleteAnimation={deleteAnimation}>
            
            <figure className="cover" onClick={() => handleAddToMyList(id)}>
                <span className="over">
                    <p>ADICIONAR</p>
                </span>
                <Image 
                    alt=""
                    fill
                    src={`data:image/jpeg;base64,${image}`}
                />
            </figure>
            {isReleased && (
                <span className="released-marker">LANÇADO</span>
            )}
            
            <div className="release-info">
                {type === 2 ? (
                    <>
                        <p className="title">{title}</p>
                        <span>{daysToGo}</span>
                    </>
                ) : (
                    <>
                        <span>{daysToGo}</span>
                        <p className="title">{title}</p>
                        {isAuthenticated && (
                            // <button className="remove-button" onClick={() => handleRemoveRelease(id)}>remover <AiOutlineClose /></button>
                            <button className="remove-button" onClick={() => handleOpenConfirmation({id, title})}>remover <AiOutlineClose /></button>
                        )}
                    </> 
                )}
            </div>
        </Container>
    );
}