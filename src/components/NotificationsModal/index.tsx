import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/legacy/image";

const notifications = [
    {
        id: 1,
        type: "Atenção",
        description: "Um usuário relatou que a capa registrada em Silent Hill 2 Remake não condiz com o lançamento em questão. Por favor, verifique se as informações estão corretas."
    },
    {
        id: 2,
        type: "Lançou",
        description: "Tomb Raider: Trilogy Remaster acaba de ser lançado"
    },
    {
        id: 3,
        type: "Em breve",
        description: "CoD: New Days está programado para lançar daqui à 7 dias."
    },
    {
        id: 4,
        type: "Mudanças",
        description: "Need For Speed: Outlaw teve sua data de lançamento alterada para o dia 15/04/2023"
    },
];

interface NotificationsModal {
    isVisible: boolean,
    setVisible: React.Dispatch<SetStateAction<boolean>>
}

export function NotificationsModal({ isVisible, setVisible }: NotificationsModal){
    const [notificationsExists, setNotificationsExists]= useState(true);

    useEffect(() => {
        document.body.style.overflowY = isVisible ? "hidden" : "auto";
    }, [isVisible]);

    return(
        // <Container isVisible={isVisible} >
        <Container isVisible={isVisible} >
            <span className="background" onClick={() => setVisible(false)}></span>

            <div className="notifications-container" >
                <div className="header">
                    <h1>Atividade</h1>
                    <AiOutlineClose onClick={() => setVisible(false)} />
                </div>
                {notificationsExists == true ? 
                (<>
                    {notifications.map(notification => (
                        <div key={notification.id} className="notification-item">
                            <p className="date">hoje</p>
                            <p><span>{notification.type}: </span>{notification.description}</p>
                        </div>
                    ))}
                </>) : (
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