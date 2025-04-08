import React, {  useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title,category}) => {
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjI2MTQ2OWFhYjJhNWExODYxYTQxY2MyZmNkMmQ2MyIsIm5iZiI6MTc0Mjg5NzgyMi42ODEsInN1YiI6IjY3ZTI4MjllMTZhM2M1YzIyNGYwNWIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X7jajN9kZxMO_6YTc1b7jYFP0egA_EGvJzqZYggIorc'
    }
  };
  
  

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,idx)=>{
          return (
            <Link to={`/player/${card.id}`} className="card">
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
