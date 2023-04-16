import axios from 'server/public/src/axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
