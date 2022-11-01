import React, { useState } from "react"
import { render } from "react-dom"
import { Footer } from "../components/Footer"
import { GamesContainer } from "../components/GamesContainer"
import { Header } from "../components/Header"
import { ResultsNotFound } from "../components/ResultsNotFound"
import { Container } from "../styles/games-styles"

export default function GamesPage(){
    const [ isResultsFound, SetIsResultsFound ] = useState(false);

    return(
        <>
            <Container>
                {isResultsFound ? (
                    <>
                        <h1>Jogos</h1>
                        <GamesContainer />
                    </>
                ) : (
                    <ResultsNotFound />
                )}
                
            </Container>
        </>
    )
}