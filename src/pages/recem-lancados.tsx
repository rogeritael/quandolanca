import React, { useState, useEffect } from "react"
import { render } from "react-dom"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { GamesContainer } from "../components/GamesContainer"
import { Header } from "../components/Header"
import { ResultsNotFound } from "../components/ResultsNotFound"
import { Container } from "../styles/games-styles"
import { api } from "../utils/api"

interface RecentListProps {
    id: number,
    name: string,
    date: string
}

export default function RecemLancados(){
    const [ isResultsFound, SetIsResultsFound ] = useState(true);
    const [recentList, setRecentList] = useState<RecentListProps[]>([]);

    useEffect(() => {
        api({
            method: 'get',
            url: '/releases/recently'
        })
        .then(response => {
            setRecentList(response.data)
        })
        .catch(err => {
            setRecentList([]);
        })
    },[]);

    return(
        <>
            <Header/>
            <Container>
                {isResultsFound ? (
                    <>
                        <h1>Recém Lançados</h1>
                        <GamesContainer>
                            {recentList.map(item => (
                                <Card
                                    key={item.id}
                                    id={item.id}
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