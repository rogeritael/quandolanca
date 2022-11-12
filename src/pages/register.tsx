import { Form } from "../components/Form";
import { Container } from "../styles/login_styles";
import { Context } from "../context/UserContext";
import { useRouter } from 'next/router';
import { useContext, useEffect } from "react";

export default function Login(){
    const { isAuthenticated } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        if(localStorage.getItem('token') && isAuthenticated){
            router.push('/');
        }
    }, []);

    return(
        <Container>
            <Form
                image="/astronauta-cadastro.png"
                type="register"
            />
        </Container>
    )
}