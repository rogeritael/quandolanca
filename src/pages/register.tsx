import { Form } from "../components/Form";
import { Container } from "../styles/login_styles";
import { Context } from "../context/UserContext";
import { useContext } from "react";

export default function Login(){
    const register = useContext(Context);

    return(
        <Container>
            <Form
                image="/astronauta-cadastro.png"
                type="register"
            />
        </Container>
    )
}