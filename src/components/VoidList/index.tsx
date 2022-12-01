import Image from "next/legacy/image";
import { Container } from "./styles";

export function VoidList(){
    return (
        <Container>
            <figure className="voidlist-image">
                <Image
                    src="/astronauta.png"
                    alt=""
                    layout="fill"
                    object-fit="cover"
                />
            </figure>
            <h2>Não há nada por aqui ainda :(</h2>
        </Container>
    )
}