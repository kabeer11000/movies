import React from "react";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getMovieDetails} from "../api";
import RawPlayer from "../RawPlayer/Player";

export const Player = () => {
    const [movie, setMovie] = useState();
    const params = useSearchParams()[0];
    useEffect(() => {
        getMovieDetails(params.get("id")).then(res => {
            setMovie(res)
            console.log(res.data.movie)
        });
    }, []);
    return params.get("id") ? movie ? <RawPlayer movie={movie.data.movie}/> : "Loading" : "ID IS REQUIRED"

}
export default Player;