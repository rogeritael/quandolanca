import { Card } from "../components/Card";
import { CardSlider } from "../components/CardSlider";
import { useEffect, useState, useContext } from "react";
import { api } from "../utils/api";
import { Context } from "../context/UserContext";
import { ConfirmModal } from "../components/ConfirmModal";
import { VoidList } from "../components/VoidList";

interface ListProps {
  id: number,
  name: string,
  image: string
  date: string,
}

export default function Home() {
  const [ isResultsFound, SetIsResultsFound ] = useState(true);
  const [recommended, setRecommended] = useState<ListProps[]>([]);
  const { isAuthenticated, mainList, setMainList, generateNotifications } = useContext(Context);

  useEffect(() => {
    api({
        method: 'get',
        url: '/releases/nextreleases'
    })
    .then(response => {
      setRecommended(response.data)
    });

    isAuthenticated ?
      api({
        method: 'get',
        url: '/users/getuser',
        headers: {
          authorization: JSON.parse(localStorage.getItem('token') || '{}')
        }
      })
      .then(response => {
        const userlist = response.data.user.userlists;

        setMainList(userlist);

        userlist.length <= 1 && SetIsResultsFound(false);

        userlist.map((item: any) => {
          generateNotifications(item.date, item.name);
        });
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
        response.data.length < 1 && SetIsResultsFound(false);
      })
      .catch(err => {
          SetIsResultsFound(false)
      })
    
  }, [isAuthenticated, setMainList]);

  return (
    <>
      <ConfirmModal />
      <CardSlider isResultsFound={isResultsFound} columns={1} title={isAuthenticated ? "Minha Lista" : "Recém Lançados"}>
        {mainList.length > 0 ? ( mainList.map(item => (
          <Card
            key={item.id}
            mainCard={isAuthenticated ? true : false}
            title={item.name}
            date={item.date}
            id={item.id}
            setResults={SetIsResultsFound}
            mainList={mainList}
            setMainList={setMainList}
            image={item.image}
          />
          ))):
          (
            <VoidList />
          )}
      </CardSlider>

      <CardSlider title="Recomendados">
        {recommended.map(release => (
          <Card
            key={release.id}
            type={2}
            title={release.name}
            date={release.date}
            id={release.id}
            image={release.image}
          />
          ))}
      </CardSlider>
    </>
  )
}
