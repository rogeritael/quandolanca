import { Form } from "../components/Form"
import { Container } from "../styles/login_styles"

export default function Login(){
    return(
        <Container>
            <Form
                image="/astronauta-login.png"
                type="login"
            />
        </Container>
    )
}