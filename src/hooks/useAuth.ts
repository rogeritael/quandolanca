import { useState } from 'react';
import { api } from '../utils/api';
import { useFlashMessage } from './useFlashMessage';
import { useRouter } from 'next/router';

interface RegisterProps {
    name: string,
    email: string,
    password: string,
    confirmpassword: string
}

interface LoginProps {
    email: string,
    password: string,
}

export function useAuth(){
    const { setFlashMessage } = useFlashMessage();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const router = useRouter();

    async function register({name, email, password, confirmpassword}: RegisterProps){
        let message = "Cadastro realizado com sucesso"
        let type = 'success';

        try{
            await api({
                method: 'post',
                url: '/users/register',
                data: {
                    name, email, password, confirmpassword
                }
            })
        }catch(err: any ){
            message = err.response.data.message;
            type = 'error';
        }

        setFlashMessage({message, type});
    }

    async function login({ email, password }: LoginProps){
        let message = "Login realizado com sucesso"
        let type = 'success';

        try {
            const data = await api({
                method: 'post',
                url: '/users/login',
                data: { email, password }
            })
            .then(response => {return response.data});

            setIsAuthenticated(true);
            localStorage.setItem('token', JSON.stringify(data.token));
            router.push('/');

        }catch(err: any){
            message = err.response.data.message;
            type = 'error';
        }
        setFlashMessage({message, type});
    }

    async function logout(){
        setIsAuthenticated(false)
        localStorage.removeItem('token');
        router.push('/');
    }

    return { register, login, logout, isAuthenticated }
}