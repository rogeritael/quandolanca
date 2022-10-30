import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainListContainer } from "../components/MainListContainer";
import { RecommendedList } from "../components/RecommendedList";

export default function Home() {
  return (
    <>
      <MainListContainer title="Minha Lista">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </MainListContainer>
      <RecommendedList title="Recomendados">
        <Card className="type2"/>
        <Card className="type2"/>
        <Card className="type2"/>
        <Card className="type2"/>
        <Card className="type2"/>
      </RecommendedList>
    </>
  )
}
