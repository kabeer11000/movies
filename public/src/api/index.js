const prod = true;
export const Catch = async (promise) => {
    try {
        const p = await promise;
        return [null, p]
    } catch (e) {
        return [e, null];
    }
}
export const getAllMovies= async () => (await fetch("https://yts.mx/api/v2/list_movies.json")).json();
export const getMovieDetails = async (imdbId)=> (await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=" + imdbId)).json();
export const streamURI =  prod ? window.location.protocol + "//" + window.location.host : "http://localhost:3000";
export const getStreamConfig = async (hash) => (await fetch(`${streamURI}/stream/v1/details?hash=${hash}`)).json();
export const getPlaybackURL = (streamId, file) => `${streamURI}/stream/v1/play?stream_id=${streamId}&file=${file}`;
export const getMovieSuggestions = async (id) => (await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)).json();