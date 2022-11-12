import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CardSlider } from "../components/CardSlider";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function Home() {
  const [recommended, setRecommended] = useState([{name:'oi', id: '1'}]);

  useEffect(() => {
      api({
          method: 'get',
          url: '/releases/nextreleases'
      })
      .then(response => {
        setRecommended(response.data)
      })
  },[])


  return (
    <>
      <Header />
      <CardSlider columns={1} title="Minha Lista">
        
      </CardSlider>

      <CardSlider title="Recomendados">
        {recommended.map(release => (
          <Card
            key={release.id}
            type={2}
            title={release.name}
            date={release.date}  
          />
          ))}
      </CardSlider>
      <Footer />
    </>
  )
}
