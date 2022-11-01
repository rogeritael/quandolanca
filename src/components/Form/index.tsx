import Image from "next/legacy/image";
import Link from "next/link";
import { Container } from "./styles";


interface FormProps {
    image: string,
    type: "login" | "register"
}

export function Form({ image, type }: FormProps){
    return(
        <Container>
            {type === "login" ? <h1>Login</h1> : <h1>Cadastrar</h1> }
            
            <figure>
                <Image
                    src={image}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    />
            </figure>
            {type === "login" ?
                <p className="description">Faça login com a sua conta QuandoLança</p>
            :
                <p className="description">Cadastre-se no QuandoLança para ter acesso aos lançamentos</p>
            }
            {type === "register" && (
                <label>
                    <p>Nome:</p>
                    <input type="password" placeholder="Digite seu nome..."/>
                </label>
            )}
            <label>
                <p>Email:</p>
                <input type="email" placeholder="Digite seu email..."/>
            </label>
            <label>
                <p>Senha:</p>
                <input type="password" placeholder="Digite sua senha..."/>
            </label>
            <button type="submit">{type === "login" ? "logar" : "cadastrar"}</button>

            
            {type === "login" ?
                <p>Ainda não possui uma conta? <Link href="/register">Cadastrar</Link> </p>
            :
                <p>Já possui uma conta? <Link href="/login">Faça Login</Link> </p>
            }
        </Container>
    )

    // {type === "login" ? : }
}