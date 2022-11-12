import Link from "next/link";
import Image from "next/legacy/image";
import { useEffect, useState,useContext } from "react";
import { BsFillBellFill } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Container } from "./styles";
import { AppModal } from "../Modal";
import { MobileMenu } from "../MobileMenu";
import { NotificationsModal } from "../NotificationsModal";
import { FlashMessageCard } from "../FlashMessageCard";
import { api } from "../../utils/api";
import { Context } from "../../context/UserContext";

const pages = [{
    title: "Inicio",
    url: "/",
    id: 0
},
{ 
    title: "Jogos",
    url: "/games",
    id: 1
},
{
    title: "Filmes e Séries",
    url: "/series",
    id: 2
},
{
    title: "Recém Lançados",
    url: "/recem-lancados",
    id: 3
}];

export function Header(){
    const [isNotificationModalOpen, SetIsNotificationModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isNewReleaseModalOpen, SetIsNewReleaseModalOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

    const [username, setUsername] = useState()
    const [userList, setUserList] = useState([]);
    const { isAuthenticated, logout } = useContext(Context);
    
    //teste
    const [array, setArray] = useState([{name:'oi', id: '1'}]);

    useEffect(() => {
        api({
            method: 'get',
            url: '/releases/recently'
        })
        .then(response => {
            setArray(response.data)
        })

        if(isAuthenticated){
            api({
                method: 'get',
                url: 'users/getuser',
                headers: {
                    authorization: JSON.parse(localStorage.getItem('token'))
                }
            })
            .then(response => {
                setUsername(response.data.user.name);
                setUserList(response.data.user.userlists)
            })
            .catch(err => alert(err.data))
        }
    },[]);
    

    function handleOpenNotificationModal(){
        SetIsNotificationModalOpen(true);
    }
    function handleOpenReleaseModal(){
        SetIsNewReleaseModalOpen(true);
    }

    function handleCloseModal(){
        SetIsNotificationModalOpen(false);
        SetIsNewReleaseModalOpen(false);
    }

    return(
        <>
            
        <NotificationsModal isVisible={isNotificationsVisible} setVisible={setIsNotificationsVisible} />
        <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
        <Container>
            <div className="header-top">
                <form>
                    <input type="text" placeholder="Procurar Lançamentos" />
                    <button type="submit">
                        <FiSearch />
                    </button>
                </form>
                { isAuthenticated ? (
                    <div className="user-info">
                        <BsFillBellFill onClick={() => setIsNotificationsVisible(true)}/>

                        {/* MODAL */}
                        <AppModal isOpen={isNotificationModalOpen} onRequestClose={handleCloseModal}/>
                        <p>{username}<span className="logout-link" onClick={() => logout()}>sair</span> </p>
                    </div>
                ) : (
                    <Link href="/login" className="login-link">LOGIN | CRIAR CONTA</Link>
                )}
                <div className="icons">
                    <FaBars className="toggle" onClick={() => setIsMenuOpen(true)}/>
                    {!isAuthenticated &&( <Link href="/login" className="login-icon"><BiLogIn /></Link> )}
                </div>
            </div>
            <nav className="pages">
                {pages.map( page => (
                    <Link key={page.id} href={page.url} className={page.id === activeLink ? "active" : ""} onClick={() => setActiveLink(page.id)}>
                        {page.title}
                    </Link>
                ))}
            </nav>
        </Container>
        </>
    );
}