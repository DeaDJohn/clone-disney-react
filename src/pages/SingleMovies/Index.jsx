import { useEffect, useState } from "react";
import {getMovie, getMovieDetails, getMovieSimilar} from "../../services/apiCalls"
import {  useParams, Link } from 'react-router-dom';
import Loading from "../../components/Loading";
import { register } from 'swiper/element/bundle';
import CardItem from "../../components/CardItem";
register();

const SingleMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [movieCredits, setMovieCredits] = useState({})
    const [moviesSimilar, setMoviesSimilar] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            getMovie({id}),
            getMovieDetails({id, detail: 'credits'}),
            getMovieSimilar({id})
        ]).then(([movieInfo, movieInfoCasting, moviesSimilar]) => {
            setMovie(movieInfo);
            setMovieCredits(movieInfoCasting)
            setMoviesSimilar(moviesSimilar)
            console.log(moviesSimilar)
        }).catch ((error)  => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
            console.log(movie)
        })

    }, [id]);

    return (
        <>
        {
            loading || !movie ? 
            <Loading /> : 
            (
                <div className="singleDetail">
                    <div className="singleDetail--header h-screen flex align-bottom">
                        <div className="singleDetail--header-bg">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                            <div className="singleDetail--header-cover"></div>
                        </div>
                        <div className="singleDetail--header-info mt-auto relative w-screen py-10">
                            <div className="container mx-auto">
                                <div className="singleDetail--title font-bold text-5xl mb-5">{movie.title}</div>
                                <div className="singleDetail--text lg:w-2/3">{movie.overview}</div>
                            </div>
                        </div>
                    </div>

                    <section className="my-16 section">
                        <div className="container mx-auto">
                            <div className="section--header mb-10">
                                <div className="section--title">
                                    <h3 className="font-bold text-2xl" >Cast:</h3>
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
                                            movieCredits?.cast?.map( acts => 
                                                (
                                                    <swiper-slide key={acts.credit_id}>
                                                        <div  className='cardItem acts relative swiper-slide'>
                                                            <Link to={`/movies/${acts.credit_id}`} className="cardItem--wrapper">
                                                                <div className="image-container">
                                                                    <div>
                                                                        <img src={`https://image.tmdb.org/t/p/original/${acts.profile_path}`} alt={acts.name} />
                                                                    </div>
                                                                    <div className="absolute w-100 h-100 flex align-bottom justify-start">
                                                                        { acts.name }
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </swiper-slide>
                                                )
                                            )
                                        }
                                 </swiper-container>
                            </div>
                        </div>
                    </section>

                    {(moviesSimilar.results.length > 0) && (
                        <section className="my-16 section">
                            <div className="container mx-auto">
                                <div className="section--header mb-10">
                                    <div className="section--title">
                                        <h3 className="font-bold text-2xl" >Similar:</h3>
                                    </div>
                                </div>
                                <div className="section--content casts-section">
                                <swiper-container
                                    space-between="50"
                                    slides-per-view="4"
                                    pagination="false" 
                                >
                                            { console.log(moviesSimilar) }
                                            {
                                                moviesSimilar?.results?.map( movie => 
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
                    )}
                    

                </div>
            )
        }
        </>
        
    );
};

export default SingleMovie;
