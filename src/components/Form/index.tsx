import Image from "next/legacy/image";
import Link from "next/link";
import { Container } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState, useContext } from "react";
import { Context } from '../../context/UserContext';


interface FormProps {
    image: string,
    type: "login" | "register",
}

export function Form({ image, type }: FormProps){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const { register, login } = useContext(Context);
    const [token, setToken] = useState("")

    async function handleRegister(e: Event){
        e.preventDefault();
        const user = {
            name, email, password, confirmpassword
        }

        await register(user);
    }

    async function handleLogin(e: Event){
        e.preventDefault();
        const user = { email, password }
        let receivedToken = await login(user);
    }

    return(
        <Container onSubmit={(e) => type === "login" ? handleLogin(e) : handleRegister(e)}>
            <Link href="/" className="voltar">
                <AiOutlineArrowLeft />
                <p>Home</p>
            </Link>
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
                    <input type="text" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} />
                </label>
            )}
            <label>
                <p>Email:</p>
                <input type="email" placeholder="Digite seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <p>Senha:</p>
                <input type="password" placeholder="Digite sua senha..." value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            {type === "register" && (
                <label>
                    <p>Confirmação de Senha:</p>
                    <input type="password" placeholder="Confirme a sua senha..." value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)}/>
                </label>
            )}
            <button
                type="submit"
            >
                {type === "login" ? "logar" : "cadastrar"}
            </button>

            
            {type === "login" ?
                <p>Ainda não possui uma conta? <Link href="/register">Cadastrar</Link> </p>
            :
                <p>Já possui uma conta? <Link href="/login">Faça Login</Link> </p>
            }
        </Container>
    )

    // {type === "login" ? : }
}