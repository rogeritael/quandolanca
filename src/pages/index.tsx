import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainListContainer } from "../components/MainListContainer";
import { RecommendedList } from "../components/RecommendedList";
import { CardSlider } from "../components/CardSlider";

export default function Home() {
  return (
    <>
      <CardSlider columns={1} title="Minha Lista">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardSlider>

      <CardSlider title="Recomendados">
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
      </CardSlider>

{/*       
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
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
        <Card type={2}/>
      </RecommendedList> */}
    </>
  )
}
