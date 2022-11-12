import React, { useState,useEffect } from "react"
import { render } from "react-dom"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { GamesContainer } from "../components/GamesContainer"
import { Header } from "../components/Header"
import { ResultsNotFound } from "../components/ResultsNotFound"
import { Container } from "../styles/games-styles"
import { api } from "../utils/api"

export default function GamesPage(){
    const [ isResultsFound, SetIsResultsFound ] = useState(false);
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        api({
            method: 'get',
            url: '/releases/getcategory/games'
        })
        .then(response => {
            setGamesList(response.data)
        })
        .catch(err => {
            setGamesList([]);
        })
    },[]);

    return(
        <>
            <Header />
            <Container>
                {gamesList.length > 0 ? (
                    <>
                        <h1>Jogos</h1>
                        <GamesContainer>
                            {gamesList.map(item => (
                                <Card
                                    key={item.id}
                                    title={item.name}
                                    date={item.date}
                                />
                            ))}
                        </GamesContainer>
                        
                    </>
                ) : (
                    <ResultsNotFound />
                )}
                
            </Container>
            <Footer />
        </>
    )
}