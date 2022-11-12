import React, { useState,useEffect } from "react"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { GamesContainer } from "../components/GamesContainer"
import { Header } from "../components/Header"
import { ResultsNotFound } from "../components/ResultsNotFound"
import { Container } from "../styles/games-styles"
import { api } from "../utils/api"

export default function Series(){
    const [ isResultsFound, SetIsResultsFound ] = useState(true);
    const [seriesList, setSeriesList] = useState([]);

    useEffect(() => {
        api({
            method: 'get',
            url: '/releases/getcategory/series'
        })
        .then(response => {
            setSeriesList(response.data)
        })
        .catch(err => {
            setSeriesList([]);
        })
    },[]);

    return(
        <>
            <Header />
            <Container>
                {isResultsFound ? (
                    <>
                        <h1>Filmes e Séries</h1>
                        <GamesContainer>
                            {seriesList.map(item => (
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