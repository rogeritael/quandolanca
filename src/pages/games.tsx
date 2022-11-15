import React, { useState,useEffect } from "react";
import { Card } from "../components/Card" ;
import { Footer } from "../components/Footer";
import { GamesContainer } from "../components/GamesContainer";
import { Header } from "../components/Header";
import { ResultsNotFound } from "../components/ResultsNotFound";
import { Container } from "../styles/games-styles";
import { api } from "../utils/api";
import moment from 'moment';

interface IGamesList {
    id: number,
    name: string,
    date: string
}

export default function GamesPage(){
    const [ isResultsFound, SetIsResultsFound ] = useState(true);
    const [gamesList, setGamesList] = useState<IGamesList[]>([]);

    useEffect(() => {
        api({
            method: 'get',
            url: '/releases/getcategory/games'
        })
        .then(response => {
            setGamesList(response.data)
            response.data.length < 1 && SetIsResultsFound(false)
        })
        .catch(err => {
            SetIsResultsFound(false)
        });

    },[]);

    return(
        <>
            <Header/>
            <Container>
                {gamesList.length > 0 && (
                    <>
                        <h1>Jogos</h1>
                        <GamesContainer>
                            {gamesList.map(item => (
                                <Card
                                    id={item.id}
                                    key={item.id}
                                    title={item.name}
                                    date={item.date}
                                />
                            ))}
                        </GamesContainer>
                        
                    </>
                )}

                {isResultsFound === false && (<ResultsNotFound />) }
                
            </Container>
            <Footer />
        </>
    )
}