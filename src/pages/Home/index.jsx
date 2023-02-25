import { useEffect, useState } from "react"
import CardItem from "../../components/CardItem"
import {getTrending} from "../../services/apiCalls"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {

    const [trending, setTrending] = useState([])

    useEffect(() => {
        async function fetchTrending() {
            const results = await getTrending({});
            setTrending(results);
          }
      
          fetchTrending();
    }, [])

    return (
        <>
            <div className="cabecera">
                <div className="container mx-auto">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {trending.map(item => (
                            <SwiperSlide>
                                <CardItem key={item.key} item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <section>
                <div className="container mx-auto flex">
                    <div className="categoryBtn w-1/6">
                        <div className="categoryBtn--wrapper">
                            <div>
                                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
                                <video class="hover-image" width="320" height="240" muted loop="" autoplay="" playsInline="">
                                    <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="categoryBtn w-1/6">
                        <div className="categoryBtn--wrapper">
                            <div>
                                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
                                <video class="hover-image" width="320" height="240" muted loop="" autoplay="" playsinline="">
                                    <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="categoryBtn w-1/6">
                        <div className="categoryBtn--wrapper">
                            <div>
                                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
                                <video class="hover-image" width="320" height="240" muted loop="" autoplay="" playsInline="">
                                    <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="categoryBtn w-1/6">
                        <div className="categoryBtn--wrapper">
                            <div>
                                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"/>
                                <video class="hover-image" width="320" height="240" muted loop="" autoplay="" playsInline="">
                                    <source src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home