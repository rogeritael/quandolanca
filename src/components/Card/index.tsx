import { Container } from "./styles";
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { useFlashMessage } from "../../hooks/useFlashMessage";
import { api } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/UserContext";
import moment from 'moment';

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
    mainList?: ListProps[]
}

export function Card({ type, title, date, id, mainCard, mainList, setMainList }: CardProps){
    const [daysToGo, setDaysToGo] = useState('')
    const { setFlashMessage } = useFlashMessage();
    const { isAuthenticated, notifications, setNotifications } = useContext(Context);

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
            setMainList(mainList?.filter(item => item.id !== id));
        })
        .catch(err => {
            message = err.response.data.message;
            type = 'error';
        });

        setFlashMessage({message, type});
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
            setDaysToGo(`faltam ${daysToGo} DIAS`);

            if(parseInt(daysToGo) < 0 ){
                setDaysToGo(`lançado a ${daysToGo.replace('-', '')} DIAS`)
            }
        }
        
        
    }, [])

    // useEffect(() => {
    //     //se for card do usuário envia notificação para a api
    //     if(mainCard === true){
    //         const newdate = new Date(); 
    //         const current_date = Date.parse(newdate as any)
    //         const release_date = Date.parse(date)
    //         const days = parseInt(((release_date - current_date) / 86400000).toFixed(0));

    //         if(days <= 30 && days > 0){
    //             let notification = {
    //                 type: 'comingsoon',
    //                 days: days,
    //                 id: id
    //             }

    //             api({
    //                 method: 'post',
    //                 url: 'usernotifications/create',
    //                 data: notification
    //             })
    //             .then(response => {})
    //             .catch(err => {});

    //         } else if(days < 0 && days >= -30){
    //             let notification = {
    //                 type: 'released',
    //                 days: days,
    //                 releaseId: id
    //             }

    //             api({
    //                 method: 'post',
    //                 url: 'usernotifications/create',
    //                 data: notification
    //             })
    //             .then(response => {})
    //             .catch(err => {});
    //         }
            
    //     }
    // }, [mainCard, id, date])

    return(
        <Container isAuthenticated={isAuthenticated} type={type} mainCard={mainCard}>
            <figure className="cover" onClick={() => handleAddToMyList(id)}>
                <span className="over">
                    <AiOutlinePlusCircle />
                </span>
            </figure>
            <span className="released-marker">LANÇADO</span>
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
                            <button className="remove-button" onClick={() => handleRemoveRelease(id)}>remover <AiOutlineClose /></button>
                        )}
                    </> 
                )}
            </div>
        </Container>
    );
}