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
