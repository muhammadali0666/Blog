import { Layout } from "../../Components/Layout/layout";
import {useEffect, useState} from "react"

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://n36-blog.herokuapp.com/categories`)
      const categories = await res.json()
      setData(categories)
    }
    getData()
  },[])
  console.log(data);

  return (
    <div className="home">
     <Layout>
      <h1>All</h1>
      {
        data.length && <ul className="d-flex">
          {
            data.map((e) => (
              <li>
                <p>{}</p>
              </li>
            ))
          }

        </ul>
      }
     </Layout>
    </div>
  );
}

export default Home;


{/* <div className="poular-movi">
{movies.results && <ul className="d-flex card-list">
  {movies.results.map((e) => (
    <li key={e.id} className="mx-4 text-light">
    <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} alt={e.title} />
    <div className="p-2">
      <h4 className="fs-5">{e.title}</h4>
      <p>Lang:{e.original_language}</p>
      <p>Vote:{e.vote_count}</p>
    </div>
    </li>
  ))}
  </ul>}
</div> */}