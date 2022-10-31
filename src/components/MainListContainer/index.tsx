import { Container } from "./styles";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { SlideText } from "../SliderText";

import Slider from 'react-slick';


interface MainListContainerProps {
    title: string,
    children?: React.ReactNode
}


export function MainListContainer({ title, children }: MainListContainerProps){
    const carousel = useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(() => {
        // const scrollWidth = carousel.current?.scrollWidth  || 0;
        // const offsetWidth = carousel.current?.offsetWidth || 0;
        // setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        //7 itens de 12rem = 84rem  | 6 espaço de margem de 2rem = 12 rem | itens + margem = 96rem 
        const width = 76 * 16;
        setCarouselWidth(width)
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