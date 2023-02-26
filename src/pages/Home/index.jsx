import { useEffect, useState } from "react"
import CardItem from "../../components/CardItem"
import {getTrending, getMovieUpcoming} from "../../services/apiCalls";
import { register } from 'swiper/element/bundle';
import Loading from "../../components/Loading";
register();

const Home = () => {

    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setLoading(true);
        Promise.all([
            getTrending(),
            getMovieUpcoming()
        ]).then(([moviesTrending, moviesUpcoming]) => {
            setTrending(moviesTrending);
            setUpcoming(moviesUpcoming);
            console.log(trending);
            console.log(upcoming);

        }).catch ((error)  => {
            console.log(error);
        }).finally(() => {
            setLoading(false);

        })
    }, [])

    return (
        <>
            {
                loading ?
                    <Loading /> 
                : 
                (
                    <>
                        <section className="mt-16 section">                
                            <div className="cabecera">
                                <div className="container mx-auto">
                                    <swiper-container
                                        space-between="50"
                                        slides-per-view="1"
                                        pagination="true" 
                                    >
                                        {trending.map(item => (
                                            <swiper-slide>
                                                <CardItem key={item.key} item={item} />
                                            </swiper-slide>
                                        ))}
                                    </swiper-container>
                                </div>
                            </div>
                        </section>
                        <section className="mt-16 section">
                            <div className="container mx-auto flex">
                                <div className="categoryBtn w-1/6">
                                    <div className="categoryBtn--wrapper">
                                        <div>
                                            <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
                                            <video className="hover-image" width="320" height="240" muted loop={true} autoplay="" playsInline="">
                                                <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="categoryBtn w-1/6">
                                    <div className="categoryBtn--wrapper">
                                        <div>
                                            <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
                                            <video className="hover-image" width="320" height="240" muted loop={true} autoplay="" playsInline="">
                                                <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="categoryBtn w-1/6">
                                    <div className="categoryBtn--wrapper">
                                        <div>
                                            <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
                                            <video className="hover-image" width="320" height="240" muted loop={true} autoplay="" playsInline="">
                                                <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="categoryBtn w-1/6">
                                    <div className="categoryBtn--wrapper">
                                        <div>
                                            <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"/>
                                            <video className="hover-image" width="320" height="240" muted loop={true} autoplay="" playsInline="">
                                                <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="my-16 section">
                            <div className="container mx-auto">
                                <div className="section--header mb-10">
                                    <div className="section--title">
                                        <h3 className="font-bold text-2xl" >Upcoming:</h3>
                                    </div>
                                </div>
                                <div className="section--content casts-section">
                                    <swiper-container
                                        space-between="50"
                                        slides-per-view="4"
                                        pagination="false" 
                                    >
                                        {
                                            upcoming.results?.map( movie => 
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
                    </>
                )
            }
        </>
    )
}

export default Home