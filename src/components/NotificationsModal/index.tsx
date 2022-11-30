import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import { SetStateAction, useEffect, useState, useContext } from "react";
import Image from "next/legacy/image";
import { Context } from "../../context/UserContext";

interface NotificationsModal {
    isVisible: boolean,
    setVisible: React.Dispatch<SetStateAction<boolean>>
}

export function NotificationsModal({ isVisible, setVisible }: NotificationsModal){
    const [notificationsExists, setNotificationsExists]= useState(true);
    const { notifications, markNotificationsAsRead, setIsThereUnreadNotification } = useContext(Context);

    function formatDate(date: string){
        const completeDate = date.split('-');

        return `${completeDate[2].split('T')[0]}/${completeDate[1]}/${completeDate[0]}`
    }

    useEffect(() => {
        if(notifications.length <= 0){
            setNotificationsExists(false);
        }else {
            setNotificationsExists(true);
        }
    }, [notifications]);

    useEffect(() => {
        document.body.style.overflowY = isVisible ? "hidden" : "auto";
    }, [isVisible]);

    function handleClick(){
        setVisible(false);
        markNotificationsAsRead();
    }

    return(
        <Container isVisible={isVisible} >
            <span className="background" onClick={() => handleClick()}></span>

            <div className="modal-container" >
                <div className="header">
                    <h1>Atividade</h1>
                    <AiOutlineClose onClick={() => handleClick()} />
                </div>
                {notificationsExists == true ? 
                (<div className="notifications-container">
                    {notifications.map(notification => (
                        <div key={notification.id} className={`notification-item ${notification.notificaionReadStatus === false &&("unread-notification")}`}>
                            <p className="date">{formatDate(notification.createdAt)}</p>
                            <p><span>{notification.type}: </span>{notification.description}</p>
                            <>
                                {notification.notificaionReadStatus === false ? setIsThereUnreadNotification(true) : setIsThereUnreadNotification(false)}
                            </>
                        </div>
                    ))}
                </div>) : (
                    <div className="empty-notifications-alert">
                        <figure>
                            <Image
                                src="/bell.png"
                                alt=""
                                layout="fill"
                                objectFit="contain" 
                            />
                        </figure>
                        <h2>Não há nada por aqui</h2>
                    </div>
                )}
            </div>
        </Container>
    );
}