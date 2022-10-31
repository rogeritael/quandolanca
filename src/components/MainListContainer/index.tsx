import { Container } from "./styles";
import { SlideText } from "../SliderText";
import { useState, useRef } from "react";
import { TesteSlide } from "../testeSlide";



interface MainListContainerProps {
    title: string,
    children?: React.ReactNode
}


export function MainListContainer({ title, children }: MainListContainerProps){
    return(
        <Container>
            <h1>{title}</h1>
            <TesteSlide />
            <div className="card-container">
                <div className="row" >
                    {children}
                </div>
            </div>
        </Container>
    );
}