import React from "react";
import { Card } from "../Card";
import { Container } from "./styles";

export function GamesContainer({children}: {children: React.ReactNode}){
    return(
        <Container>
            {children}
        </Container>
    )
}