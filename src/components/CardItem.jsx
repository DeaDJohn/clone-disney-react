import {useEffect, useState} from 'react'
import {Link} from "react-router-dom";


const CardItem = ({item}) => {

    const [titleItem, setTitleItem] = useState('');
    const [imageItem, setImageItem] = useState('');
    const [typeItem, setTypeItem] = useState('movie')

    useEffect(() => {
        if(item.title){
            setTitleItem(item.title)
        }else{
            setTitleItem(item.name);
            setTypeItem('tv')
        }
        if(item.backdrop_path){
            setImageItem(item.backdrop_path)
        }else{
            setImageItem(item.poster_path)
        }
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
            { (titleItem)? 
                (
                    <div className="cardItem--hover">
                        <h3 className='cardItem--title text-3xl font-bold w-3/4'>{titleItem}</h3>
                    </div>
                )
                : '' 
            }
            
        </Link>
    </div>
  )
}

export default CardItem