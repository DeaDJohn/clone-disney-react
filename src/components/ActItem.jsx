import React from 'react'
import { Link } from 'react-router-dom'


const ActItem = ({act}) => {
  return (
    <div  className='cardItem acts relative swiper-slide'>
        <Link to={`/movies/${act.credit_id}`} className="cardItem--wrapper">
            <div className="image-container">
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${act.profile_path}`} alt={act.name} />
                </div>
                <div className="absolute w-100 h-100 flex align-bottom justify-start">
                    { act.name }
                </div>
            </div>
            <div className="cardItem--hover">
                <h3 className='cardItem--title text-3xl font-bold w-3/4'>{act.name}</h3>
            </div>
        </Link>
    </div>
  )
}

export default ActItem