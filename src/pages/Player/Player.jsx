import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useParams , Link, useNavigate} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjI2MTQ2OWFhYjJhNWExODYxYTQxY2MyZmNkMmQ2MyIsIm5iZiI6MTc0Mjg5NzgyMi42ODEsInN1YiI6IjY3ZTI4MjllMTZhM2M1YzIyNGYwNWIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X7jajN9kZxMO_6YTc1b7jYFP0egA_EGvJzqZYggIorc'
    }
  };
  
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          setApiData({
            name: "Not Available",
            key: "",
            published_at: "0000-00-00",
            type: "N/A"
          });
        }
      })
      .catch(err => {
        console.error(err);
        setApiData({
          name: "Not Available",
          key: "",
          published_at: "0000-00-00",
          type: "N/A"
        });
      });
  }, [id]);
  
  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}}/>
      {apiData.key ? (
  <iframe 
    width='90%' height='90%' 
    src={`https://youtube.com/embed/${apiData.key}`} 
    title='trailer' 
    frameBorder="0" 
    allowFullScreen
  ></iframe>
) : (
  <p style={{ color: 'white', textAlign: 'center' }}>
    Trailer not available.
  </p>
)}

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
