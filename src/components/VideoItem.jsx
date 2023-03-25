import {useEffect, useState} from 'react'
import {Link} from "react-router-dom";


const VideoItem = ({item}) => {

    const [titleItem, setTitleItem] = useState('');
    const [typeItem, setTypeItem] = useState('movie')

    useEffect(() => {
        console.log(item)
    }, [])
    
  return (

    <div className='cardItem movie relative'>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${item.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    </div>
  )
}

export default VideoItem