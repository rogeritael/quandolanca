import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";
import bus from '../../utils/bus';

export function ConfirmModal(){
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [acceptText, setAcceptText] = useState('');
    const [rejectText, setRejectText] = useState('');
    const [handleAccept, setHandleAccept] = useState<any>()

    function handleAcceptFunction(){
        handleAccept();
        setIsVisible(false);
    }

    useEffect(() => {
        document.body.style.overflowY = isVisible ? "hidden" : "auto";
    }, [isVisible]);

    useEffect(() => {

        bus.addListener("confirmmodal", ({title, description, acceptText, rejectText, onAccept}) => {
            setIsVisible(true);
            setTitle(title);
            setDescription(description);
            setAcceptText(acceptText);
            setRejectText(rejectText);
            setHandleAccept(() => onAccept);
        });
    }, []);

    function handleCloseModal(){
        setIsVisible(false);
    }

    return(
        <Container isVisible={isVisible}>
            <span className="background">
                
            </span>
            <div className="modal-box">
                <AiOutlineClose onClick={() => handleCloseModal()}/>
                <div className="modal-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="buttons-container">
                    <button className="btn-reject" onClick={() => handleCloseModal()}>
                        {rejectText}
                    </button>
                    <button className="btn-accept" onClick={() => handleAcceptFunction()}>
                        {acceptText}
                    </button>
                </div>
            </div>
        </Container>
    )
}