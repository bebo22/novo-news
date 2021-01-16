import axios from 'axios';

class NewsService {
    getNews = () => {
        return axios.get('/everything');
    };
}

export default NewsService;