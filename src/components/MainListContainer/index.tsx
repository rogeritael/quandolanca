import { Container } from "./styles";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { SlideText } from "../SliderText";

interface MainListContainerProps {
    title: string,
    children?: React.ReactNode
}


export function MainListContainer({ title, children }: MainListContainerProps){
    const carousel = useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0)

    useEffect(() => {
        const scrollWidth = carousel.current?.scrollWidth  || 0;
        const offsetWidth = carousel.current?.offsetWidth || 0;
        setCarouselWidth(scrollWidth - offsetWidth);
    }, []);

    return(
        <Container>
            <h1>{title}</h1>
            <SlideText />
            {/* <div className="card-container">
                <div className="row">
                    {children}
                </div>
            </div> */}

            <motion.div ref={carousel} className="card-container" whileTap={{ cursor: "grabbing" }}>
                <motion.div  className="row" drag="x" dragConstraints={{right: 0, left: -carouselWidth}}>
                    {children}
                </motion.div>
            </motion.div>
        </Container>
    );
}