import { Container } from "./styles";
import React, { SetStateAction, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface MobileMenuProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
};

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

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps){
    
    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return(
        <Container isOpen={isOpen}>
            <AiOutlineClose onClick={() => setIsOpen(false)}/>

            <ul>
                {
                    pages.map(page => (
                        <li key={page.id} onClick={() => setIsOpen(false)}>
                            <Link href={page.url}>
                                {page.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <p>sair</p>
        </Container>
    )
}