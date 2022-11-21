import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CardSlider } from "../components/CardSlider";
import { useEffect, useState, useContext } from "react";
import { useFlashMessage } from "../hooks/useFlashMessage";
import { api } from "../utils/api";
import { Context } from "../context/UserContext";

interface ListProps {
  id: number,
  name: string,
  image: string
  date: string,
}

export default function Home() {
  // const [mainList, setMainList] = useState<ListProps[]>([]);
  const [ isResultsFound, SetIsResultsFound ] = useState(true);
  const [recommended, setRecommended] = useState<ListProps[]>([]);
  const { isAuthenticated, mainList, setMainList } = useContext(Context);

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
        response.data.length < 1 && SetIsResultsFound(false);
      })
      .catch(err => {
          SetIsResultsFound(false)
      })
    
  }, [isAuthenticated, setMainList]);

//   async function handleRemoveRelease(id: number){
//     const token = localStorage.getItem('token') || '{}';
//     let message = 'Lançamento removido da sua lista'
//     let type = 'success'

//     await api({
//         method: 'delete',
//         url: `/userlist/remove/${id}`,
//         headers: {
//             authorization: JSON.parse(token)
//         }
//     })
//     .then(response => {
//         message = response.data.message;
//     })
//     .catch(err => {
//         message = err.response.data.message;
//         type = 'error';
//     });

//     setFlashMessage({message, type});
// }

  return (
    <>
      <Header />
      <CardSlider isResultsFound={isResultsFound} columns={1} title={isAuthenticated ? "Minha Lista" : "Recém Lançados"}>
        {mainList.length > 0 && ( mainList.map(item => (
          <Card
            key={item.id}
            mainCard={isAuthenticated ? true : false}
            title={item.name}
            date={item.date}
            id={item.id}
            mainList={mainList}
            setMainList={setMainList}
            image={item.image}
          />
          )))}
          {/* {isResultsFound === false && (<ResultsNotFound />) } */}
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
      <Footer />
    </>
  )
}
