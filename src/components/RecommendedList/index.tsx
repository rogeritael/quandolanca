import { Container } from "./styles";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface MainListContainerProps {
    title: string,
    children?: React.ReactNode
}

export function RecommendedList({ title, children }: MainListContainerProps){
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const scrollWidth = carousel.current?.scrollWidth  || 0;
        const offsetWidth = carousel.current?.offsetWidth || 0;
        setWidth(scrollWidth - offsetWidth);
    }, []);

    return(
        <Container>
            <h1>{title}</h1>
            <div>
            <motion.div ref={carousel} className="card-container" whileTap={{cursor: "grabbing"}}>
                <motion.div className="row" drag="x" dragConstraints={{left: -width, right: 0}}>
                    {children}
                </motion.div>
            </motion.div>
            </div>
        </Container>
    );
}