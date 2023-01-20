import axios from 'axios';

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
const ApiKey = '51cea464d1158e7d34cacf903de39a42';

export const fetchTrendingMovies = async () => {
    const {
        data: { results },
    } = await moviesApi.get(`trending/movie/day?api_key=${ApiKey}`);
    return results;
};
export const fetchSearchMovies = async query => {
    const {
        data: { results },
    } = await moviesApi.get(`search/movie?api_key=${ApiKey}&query=${query}`);
    return results;
};
export const fetchMovieDetailsById = async query => {
    const { data } = await moviesApi.get(`movie/${query}?api_key=${ApiKey}`);
    return data;
};
export const fetchCastById = async query => {
    const {
        data: { cast },
    } = await moviesApi.get(`movie/${query}/credits?api_key=${ApiKey}`);
    return cast;
};
