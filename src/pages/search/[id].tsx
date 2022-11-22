import React, { useState,useEffect } from "react";
import { useRouter } from 'next/router'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../utils/api";
import { Card } from "../../components/Card";
import { GamesContainer } from "../../components/GamesContainer";
import { Container } from "../../styles/games-styles";
import { ResultsNotFound } from "../../components/ResultsNotFound";

interface IResults {
    id: number,
    name: string,
    date: string,
    image: string
}

export default function Search(){
    const { query } = useRouter();
    const [isResultsFound, setIsResultsFound] = useState(true);
    const [searchResults, setSearchResults] = useState<IResults[]>([]);

    useEffect(() => {
        const term = query.id;

        api({
            method: 'get',
            url: `/releases/search/${term}`
        })
        .then(response => {
            setSearchResults(response.data);
            response.data.length < 1 ? setIsResultsFound(false) : setIsResultsFound(true)
        })
        .catch(err => setIsResultsFound(false));
    }, [query.id])

    return(
            <Container>
                { searchResults.length > 0 && ( <>
                    <h1>Resultados da pesquisa: </h1>
                    <GamesContainer>
                        {searchResults.map(item => (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                date={item.date}
                                image={item.image}
                            />
                        ))}
                    </GamesContainer>
                </>)}

                {isResultsFound === false && (
                    <ResultsNotFound />
                )}
            </Container>
    )
}