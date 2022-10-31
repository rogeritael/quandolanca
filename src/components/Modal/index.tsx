import { Container } from "./styles";
import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

interface AppModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

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
]

export function AppModal({ isOpen, onRequestClose }: AppModalProps){
    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return(
        <Container>
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="modal-header">
                <h1>Notificações</h1>
                <AiOutlineClose className="close" onClick={onRequestClose}/>
            </div>

        {notifications.map(notification => (
            <div key={notification.id} className="notification-item">
                <p><span>{notification.type}: </span>{notification.description}</p>
            </div>
        ))}
            
        </Modal>
        </Container>
    )
}