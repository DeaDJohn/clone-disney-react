import { useEffect, useState } from "react";
import {getPerson, getPersonMovie, getMovieSimilar} from "../../services/apiCalls"
import {  useParams, Link } from 'react-router-dom';
import Loading from "../../components/Loading";
import { register } from 'swiper/element/bundle';
import CardItem from "../../components/CardItem";
import ActItem from "../../components/ActItem";
register();

function Index() {
    const { id } = useParams();
    const [person, setPerson] = useState({});
    const [movieCredits, setMovieCredits] = useState({})
    const [moviesSimilar, setMoviesSimilar] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            getPerson({id}),
            getPersonMovie({id})

        ]).then(([personInfo, moviesInfo]) => {
            setPerson(personInfo);
            setMovieCredits(moviesInfo)
            
            console.log(movieCredits)
        }).catch ((error)  => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
            console.log(person)
        })

    }, [id]);

    return (
        <>
        {
            loading || !person ? 
            <Loading /> : 
            (

                    <div className="singleDetail">
                        <div className="singleDetail--header min-h-screen flex align-bottom relative">
                            <div className="singleDetail--header-bg">
                                <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={person.name} />
                                <div className="singleDetail--header-cover"></div>
                            </div>
                            <div className="singleDetail--header-info mt-auto relative w-screen py-10 pt-24">
                                <div className="container mx-auto flex">
                                    <div className="lg:w-2/3 flex flex-col justify-end">
                                        <div className="singleDetail--title font-bold text-5xl mb-5">{person.name}</div>
                                        <div className="singleDetail--text">{person.biography}</div>
                                    </div>
                                    <div className="lg:w-1/3">
                                        <figure className="w-52 pl-7 rounded overflow-hidden">
                                            <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={person.name} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="my-16 section">
                        <div className="container mx-auto">
                            <div className="section--header mb-10">
                                <div className="section--title">
                                    <h3 className="font-bold text-2xl" >Movies:</h3>
                                </div>
                            </div>
                            <div className="section--content casts-section">
                            <swiper-container
                                space-between="50"
                                slides-per-view="4"
                                pagination="false" 
                            >
                                        { console.log(movieCredits.cast) }
                                        {
                                            movieCredits?.cast?.map( movie => 
                                                (
                                                    <swiper-slide key={movie.credit_id}>
                                                        <CardItem  item={movie} />
                                                    </swiper-slide>
                                                )
                                            )
                                        }
                                 </swiper-container>
                            </div>
                        </div>
                    </section>
                    </div>
            )
        }
        </>
        
    );
}

export default Index