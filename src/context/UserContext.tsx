import React, { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const Context = createContext({});

export function UserProvider({children}: {children: React.ReactNode}){
    const {register, login, logout, isAuthenticated} = useAuth();

    return (
        <Context.Provider value={{register, login, logout, isAuthenticated}}>{children}</Context.Provider>
    )
}