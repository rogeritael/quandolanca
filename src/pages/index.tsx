import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CardSlider } from "../components/CardSlider";
import { useEffect, useState, useContext } from "react";
import { api } from "../utils/api";
import { Context } from "../context/UserContext";

interface ListProps {
  id: number,
  name: string,
  date: string
}

export default function Home() {
  const [mainList, setMainList] = useState<ListProps[]>([]);
  const [ isResultsFound, SetIsResultsFound ] = useState(true);
  const [recommended, setRecommended] = useState<ListProps[]>([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
      
    api({
        method: 'get',
        url: '/releases/nextreleases'
    })
    .then(response => {
      setRecommended(response.data)
    });

  },[])

  useEffect(() => {

    isAuthenticated ?
      api({
        method: 'get',
        url: '/users/getuser',
        headers: {
          authorization: JSON.parse(localStorage.getItem('token') || '{}')
        }
      })
      .then(response => {
        setMainList(response.data.user.userlists);
        response.data.user.userlists.length < 1 && SetIsResultsFound(false);
      })
      .catch(err => {
        SetIsResultsFound(false)
      })
    :
      api({
        method: 'get',
        url: '/releases/recently'
      })
      .then(response => {
        setMainList(response.data);
        response.data.length < 1 && SetIsResultsFound(false)
      })
      .catch(err => {
          SetIsResultsFound(false)
      })
    
  }, [mainList, isAuthenticated])

  return (
    <>
      <Header />
      <CardSlider columns={1} title={isAuthenticated ? "Minha Lista" : "Recém Lançados"}>
        {mainList.length > 0 && ( mainList.map(item => (
          <Card
            key={item.id}
            mainCard={isAuthenticated ? true : false}
            title={item.name}
            date={item.date}
            id={item.id}
          />
          )))}
      </CardSlider>

      <CardSlider title="Recomendados">
        {recommended.map(release => (
          <Card
            key={release.id}
            type={2}
            title={release.name}
            date={release.date}
            id={release.id}
          />
          ))}
      </CardSlider>
      <Footer />
    </>
  )
}
