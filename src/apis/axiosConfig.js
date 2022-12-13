import axios from 'axios';
const instance = axios.create({
    baseURL:  `${process.env.REACT_APP_API_BASE_URL}`,
    headers: {'app-id': `${process.env.REACT_APP_APP_ID}`}
});
export default instance;