import axios from 'axios';
const KEY = 'AIzaSyC1vmfwsArTx6zHVLQEXddvrfO3PJwlx3c';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY,
   }
});