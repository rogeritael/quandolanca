import React, { useState,useEffect } from "react"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { GamesContainer } from "../components/GamesContainer"
import { Header } from "../components/Header"
import { ResultsNotFound } from "../components/ResultsNotFound"
import { Container } from "../styles/games-styles"
import { api } from "../utils/api"

interface ListProps {
    id: number,
    name: string,
    date: string
}

export default function Series(){
    const [seriesList, setSeriesList] = useState<ListProps[]>([]);
    const [ isResultsFound, SetIsResultsFound ] = useState(true);

    useEffect(() => {
        api({
            method: 'get',
            url: '/releases/getcategory/series'
        })
        .then(response => {
            setSeriesList(response.data);
            response.data.length < 1 && SetIsResultsFound(false);
        })
        .catch(err => {
            SetIsResultsFound(false)
        })
    },[]);

    return(
        <>
            <Header/>
            <Container>
                {seriesList.length > 0 && (
                    <>
                        <h1>Filmes e Séries</h1>
                        <GamesContainer>
                            {seriesList.map(item => (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    date={item.date}
                                />
                            ))}
                        </GamesContainer>
                    </>
                )}
                
                {isResultsFound === false && <ResultsNotFound />}
                    
            </Container>
            <Footer />
        </>
    )
}