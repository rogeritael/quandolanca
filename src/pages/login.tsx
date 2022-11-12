import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Form } from "../components/Form";
import { Container } from "../styles/login_styles";
import { Context } from '../context/UserContext';


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
                image="/astronauta-login.png"
                type="login"
            />
        </Container>
    )
}