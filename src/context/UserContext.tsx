import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNotifications } from "../hooks/useNotification";

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
    setNotifications: any;
    setMainList: any;
    mainList: ListProps[];
    generateNotifications: (releaseDate: string, releaseName: string) => void;
    getNotifications: () => void;
    markNotificationsAsRead: () => void;
    isThereUnreadNotification: boolean;
    setIsThereUnreadNotification: React.Dispatch<boolean>;
}

// React.Dispatch<SetStateAction<boolean>>

interface INotification {
    type: string,
    description: string,
    id: number,
    createdAt: string,
    notificaionReadStatus: boolean
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
    const { generateNotifications, notifications, setNotifications, getNotifications, markNotificationsAsRead, isThereUnreadNotification, setIsThereUnreadNotification } = useNotifications();
    const [mainList, setMainList] = useState<ListProps[]>([]);

    useEffect(() => {
        mainList.map((item: any) => {
            generateNotifications(item.date, item.name);
            getNotifications();
        })

    }, [mainList])

    return (
        <Context.Provider value={{
            register, 
            login, 
            logout, 
            setNotifications, 
            setMainList, 
            generateNotifications,
            getNotifications,
            isAuthenticated, 
            notifications, 
            mainList,
            markNotificationsAsRead,
            isThereUnreadNotification,
            setIsThereUnreadNotification
        }}>
            {children}
        </Context.Provider>
    )
}