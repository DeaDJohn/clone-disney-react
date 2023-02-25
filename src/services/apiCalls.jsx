import { API_KEY, API_URL } from '../config/config'

export const getTrending = async () => {
    const response = await fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}&language=es_ES`);
    const data = await response.json();
    return data.results;
}

export const getMovie = async ({id}) => {
    const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=es_ES`);
    const data = await response.json();
    console.log( data );
    return data;
}

export const getMovieDetails = async ({id, detail}) => {
    const response = await fetch(`${API_URL}movie/${id}/${detail}?api_key=${API_KEY}&language=es_ES`);
    console.log( 'getMovieDetails:' , detail )
    console.log( 'getMovieDetails response:' , response )
    const data = await response.json();
    return data;
}