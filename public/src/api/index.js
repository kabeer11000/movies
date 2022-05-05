export const getAllMovies= async () => (await fetch("https://yts.mx/api/v2/list_movies.json")).json();
export const getMovieDetails = async (imdbId)=> (await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=" + imdbId)).json();
export const streamURI = window.location.protocol + "//" + window.location.host || "http://localhost:3000"