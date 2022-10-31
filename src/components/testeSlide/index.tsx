import { Container } from "./styles";
import { motion } from "framer-motion";
import { Card } from "../Card";
import { useEffect, useRef, useState } from "react";

export function TesteSlide(){
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const scrollWidth = carousel.current?.scrollWidth  || 0;
        const offsetWidth = carousel.current?.offsetWidth || 0;
        setWidth(scrollWidth - offsetWidth);
    }, []);

    return(
        <Container>
            <div className="app">
                <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                    <motion.div className="inner" drag="x" dragConstraints={{left: -width, right: 0}}>
                        <motion.div className="item">
                            <Card />
                        </motion.div>
                        <motion.div className="item">
                            <Card />
                        </motion.div>
                        <motion.div className="item">
                            <Card />
                        </motion.div>
                        <motion.div className="item">
                            <Card />
                        </motion.div>
                        <motion.div className="item">
                            <Card />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </Container>
    )
}