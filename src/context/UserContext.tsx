import React, { createContext, useState } from "react";
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

interface INotification {
    type: string,
    description: string,
    id: number
}

interface MainContextData {
    isAuthenticated: boolean;
    register: ({ ...props }: RegisterProps) => void;
    login: ({ ...props }: LoginProps) => void;
    logout: () => void;
    notifications: INotification[];
    setNotifications: any,
    setMainList: any,
    mainList: ListProps[]
}

interface INotification {
    type: string,
    description: string,
    id: number
}

interface ListProps {
    id: number,
    name: string,
    date: string,
    image: string
  }

export const Context = createContext({} as MainContextData);

export function UserProvider({children}: {children: React.ReactNode}){
    const {register, login, logout, isAuthenticated} = useAuth();
    const [mainList, setMainList] = useState<ListProps[]>([]);
    const [ notifications, setNotifications ] = useState<INotification[]>([]);

    return (
        <Context.Provider value={{register, login, logout, isAuthenticated, notifications, setNotifications, mainList, setMainList}}>{children}</Context.Provider>
    )
}