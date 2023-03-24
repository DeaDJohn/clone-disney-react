import {useEffect} from 'react'
import {Link} from "react-router-dom";


const CardItem = ({item}) => {

    useEffect(() => {
        //console.log(item)
    }, [])
    
  return (

    <div className='cardItem movie relative'>
        <Link to={`/movies/${item.id}`} className="cardItem--wrapper">
            <div className="image-container">
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                </div>
            </div>
            <div className="cardItem--hover">
                <h3 className='cardItem--title text-3xl font-bold w-3/4'>{item.title}</h3>
            </div>
        </Link>
    </div>
  )
}

export default CardItem