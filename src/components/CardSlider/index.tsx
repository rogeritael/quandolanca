import { Container } from "./styles";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";

interface MainListContainerProps {
    title: string,
    columns?: number,
    children?: React.ReactNode,
    isResultsFound?: boolean | true
}

export function CardSlider({ title, columns, children, isResultsFound }: MainListContainerProps){
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const scrollWidth = carousel.current?.scrollWidth  || 0;
        const offsetWidth = carousel.current?.offsetWidth || 0;
        setWidth(scrollWidth - offsetWidth);
    }, []);

    return(
        <Container columns={columns}>
            <h1>{title}</h1>
            <motion.div ref={carousel} className="card-container" whileTap={{cursor: "grabbing"}}>
                <motion.div className="row" drag="x" dragConstraints={{left: -width, right: 0}}>
                    {children}
                </motion.div>
            </motion.div>

            {/* {isResultsFound === false && (
                <div className="voidlist-container">
                    <figure className="voidlist-image">
                        <Image
                            src="/astronauta.png"
                            alt=""
                            layout="fill"
                            object-fit="cover"
                        />
                    </figure>
                    <h2>Não há nada por aqui ainda :(</h2>
                </div>
            )} */}
        </Container>
    )
}