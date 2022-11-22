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
    date: string,
    image: string
}

export default function Series(){
    const [seriesList, setSeriesList] = useState<ListProps[]>([]);
    const [ isResultsFound, setIsResultsFound ] = useState(true);

    // useEffect(() => {
    //     api({
    //         method: 'get',
    //         url: '/releases/getcategory/series'
    //     })
    //     .then(response => {
    //         setSeriesList(response.data);
    //         response.data.length < 1 ? setIsResultsFound(false) : setIsResultsFound(true);
    //     })
    //     .catch(err => {
    //         setIsResultsFound(false)
    //     })
    // },[]);

    return(
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
                                    image={item.image}
                                />
                            ))}
                        </GamesContainer>
                    </>
                )}
                
                {isResultsFound === false && <ResultsNotFound />}
                    
            </Container>
    )
}