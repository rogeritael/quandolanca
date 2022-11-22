import { Container } from "./styles";
import { useState, useEffect } from 'react';

export function Footer(){
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        const url = window.location.href.replace('http://localhost:3000/', '')

        switch(url){
            case 'login':
                setShowFooter(false);
                break;
            case 'register':
                setShowFooter(false);
                break;
            default:
                setShowFooter(true);
        }
    }, [])

    return(
        <Container showFooter={showFooter}>
            QuandoLança &#169;2022 | Todos os Direitos Reservados.
        </Container>
    );
}