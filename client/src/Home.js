import React, {useEffect, useState} from "react";
import {getAllMovies} from "./api";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";

const Home = () => {
    const [state, setState] = useState();
    const smartMovies = async (response) => {
        const movies = response.data.movies;
        const genres = [...new Set(movies.map(movie => movie.genres).flat())];
        const moviesByGenres = genres.map(genre => ({
            genre,
            movies: movies.filter(movie => movie.genres.includes(genre))
        }))//.filter(row => row.movies.length >= 5);
        setState(moviesByGenres);
        console.log(moviesByGenres)
    }
    useEffect(() => {
        (getAllMovies()).then(smartMovies);
    }, []);
    return (<div>
            <Banner movie={state ? state[0].movies[0] : undefined}/>
            <div style={{marginTop: "2rem"}}>
                {state ? state.map(row => <Row title={row.genre} isLargeRow={row.movies.length >= 5}
                                               movies={row.movies}/>) : <></>}
            </div>
        </div>
    );
}
export default Home