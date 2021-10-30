import axios from 'axios';

const KEY = 'AIzaSyDFjZZXpfAt9NH2IpCsM9VVnmlFfyN6EWg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY,
        
    }

});
