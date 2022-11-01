import Image from "next/legacy/image";
import Link from "next/link";
import { Container } from "./styles";

export function ResultsNotFound(){
    return(
        <Container>
            <h1>Desculpe</h1>
            <figure>
                <Image
                    src="/astronauta2.png"
                    alt="imagem de nenhum resultado encontrado"
                    layout="fill"
                    objectFit="cover"
                />
            </figure>
            <p>Não conseguimos encontrar nenhum resultado relacionado à sua pesquisa</p>
            <Link href="/"> Voltar para a Home</Link>
        </Container>
    );
}