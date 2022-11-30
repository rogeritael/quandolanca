import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';

interface IConfirmModal {
    title?: string;
    description?: string;
    acceptText?: string;
    rejectText?: string;
    onAccept?: () => void;
}

export function ConfirmModal({ title, description, acceptText, rejectText, onAccept }: IConfirmModal){
    return(
        <Container>
            <span className="background">
                
            </span>
            <div className="modal-box">
                <AiOutlineClose />
                <div className="modal-text">
                    <h2>Excluir Resident Evil 4 Remake da sua lista?</h2>
                    <p>Ao fazer isso você não receberá mais notificações sobre este lançamento</p>
                </div>
                <div className="buttons-container">
                    <button className="btn-reject">
                        cancelar
                    </button>
                    <button className="btn-accept">
                        remover
                    </button>
                </div>
            </div>
        </Container>
    )
}