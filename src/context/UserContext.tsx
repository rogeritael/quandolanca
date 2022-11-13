import React, { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

interface LoginProps {
    email: string, 
    password: string, 
}

interface RegisterProps {
    name: string, 
    email: string, 
    password: string, 
    confirmpassword: string
}

interface MainContextData {
    isAuthenticated: boolean;
    register: ({ ...props }: RegisterProps) => void;
    login: ({ ...props }: LoginProps) => void;
    logout: () => void;
}

export const Context = createContext({} as MainContextData);

export function UserProvider({children}: {children: React.ReactNode}){
    const {register, login, logout, isAuthenticated} = useAuth();

    return (
        <Context.Provider value={{register, login, logout, isAuthenticated}}>{children}</Context.Provider>
    )
}