import { Container } from "./styles";
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai';
import { useEffect, useState } from "react";
import bus from '../../utils/bus';

export function FlashMessageCard(){
    const [isVisible, setIsVisible] = useState(false);
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {

        bus.addListener("flash", ({message, type}) => {
            setIsVisible(true);
            setType(type);
            setMessage(message);

            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        });
    }, []);

    return(
        <Container isVisible={isVisible} type={type}>
                {type === "success" ? 
                    <AiFillCheckSquare />
                :
                    <AiFillCloseSquare />
                }
                <p>{message}</p>
        </Container>
            
    );
}