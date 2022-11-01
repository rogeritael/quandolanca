import { Form } from "../components/Form"
import { Container } from "../styles/login_styles"

export default function Login(){
    return(
        <Container>
            <Form
                image="/astronauta-cadastro.png"
                type="register"
            />
        </Container>
    )
}