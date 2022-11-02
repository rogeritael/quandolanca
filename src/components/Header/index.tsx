import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { BsFillBellFill } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Container } from "./styles";
import { AppModal } from "../Modal";
import { MobileMenu } from "../MobileMenu";
import { NotificationsModal } from "../NotificationsModal";

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
    const [isLogged, setIsLogged] = useState(true);
    const [isNotificationModalOpen, SetIsNotificationModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isNewReleaseModalOpen, SetIsNewReleaseModalOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false)

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
                { isLogged ? (
                    <div className="user-info">
                        <BsFillBellFill onClick={() => setIsNotificationsVisible(true)}/>

                        {/* MODAL */}
                        <AppModal isOpen={isNotificationModalOpen} onRequestClose={handleCloseModal}/>
                        {/* <figure className="user-image">
                            <Image
                                src="/perfil.png"
                                alt=""
                                layout="fill"
                                object-fit="cover"
                            />
                        </figure> */}
                        <p>Rosa <span className="logout-link">sair</span> </p>
                    </div>
                ) : (
                    <Link href="/login" className="login-link">LOGIN | CRIAR CONTA</Link>
                )}
                <div className="icons">
                    <FaBars className="toggle" onClick={() => setIsMenuOpen(true)}/>
                    <Link href="/login" className="login-icon"><BiLogIn /></Link>
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