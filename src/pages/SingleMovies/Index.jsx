import { useEffect, useState } from "react";
import {getMovie, getMovieDetails, getMovieSimilar, getVideoMovie, getExternaIDlMovie} from "../../services/apiCalls"
import {  useParams, Link } from 'react-router-dom';
import Loading from "../../components/Loading";
import { register } from 'swiper/element/bundle';
import CardItem from "../../components/CardItem";
import ActItem from "../../components/ActItem";
import VideoItem from "../../components/VideoItem";

register();

const SingleMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [movieCredits, setMovieCredits] = useState({})
    const [moviesSimilar, setMoviesSimilar] = useState({})
    const [movieVideo, setMovieVideo] = useState({})
    const [movieExternalID, setMovieExternalID] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            getMovie({id}),
            getMovieDetails({id, detail: 'credits'}),
            getMovieSimilar({id}),
            getVideoMovie({id}),
            getExternaIDlMovie({id})
        ]).then(([movieInfo, movieInfoCasting, moviesSimilar, movieVideos, movieExternalID]) => {
            setMovie(movieInfo);
            setMovieCredits(movieInfoCasting)
            setMoviesSimilar(moviesSimilar)
            setMovieVideo(movieVideos)
            setMovieExternalID(movieExternalID)
            console.log(movieVideos)
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
                    <div className="singleDetail--header min-h-screen flex align-bottom relative">
                        <div className="singleDetail--header-bg">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                            <div className="singleDetail--header-cover"></div>
                        </div>
                        <div className="singleDetail--header-info mt-auto relative w-screen py-10 pt-24">
                            <div className="container mx-auto flex">
                                <div className="lg:w-2/3 flex flex-col justify-end">
                                    <div className="singleDetail--title font-bold text-5xl mb-5">{movie.title}</div>
                                    <div className="singleDetail--text lg:w-2/3">{movie.overview}</div>
                                </div>
                                <div className="lg:w-1/3">
                                    <figure className="w-52 pl-7 rounded overflow-hidden">
                                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                    </figure>
                                </div>
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
                                            movieCredits?.cast?.map( act => 
                                                (
                                                    <swiper-slide key={act.credit_id}>
                                                        <ActItem act={act} />
                                                    </swiper-slide>
                                                )
                                            )
                                        }
                                 </swiper-container>
                            </div>
                        </div>
                    </section>

                    {(movieVideo.results.length > 0) && (
                        <section className="my-16 section">
                            <div className="container mx-auto">
                                <div className="section--header mb-10">
                                    <div className="section--title">
                                        <h3 className="font-bold text-2xl" >Videos:</h3>
                                    </div>
                                </div>
                                <div className="section--content casts-section">
                                <swiper-container
                                    space-between="50"
                                    slides-per-view="2"
                                    pagination="false" 
                                >
                                            { console.log(movieVideo) }
                                            {
                                                movieVideo?.results?.map( movie => 
                                                    (
                                                        <swiper-slide key={movie.credit_id}>
                                                            <VideoItem  item={movie} />
                                                        </swiper-slide>
                                                    )
                                                )
                                            }
                                        </swiper-container>
                                </div>
                            </div>
                        </section> 
                    )}
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
