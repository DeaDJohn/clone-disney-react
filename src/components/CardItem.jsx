import {useEffect} from 'react'
import {Link} from "react-router-dom";


const CardItem = ({item}) => {

    useEffect(() => {
        console.log(item)
    }, [])
    
  return (

    <div className='cardItem relative'>
        <Link to={`/movies/${item.id}`} className="cardItem--wrapper">
            <div className="image-container">
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                </div>
            </div>
        </Link>
    </div>
  )
}

export default CardItem