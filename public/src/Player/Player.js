import React from "react";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Catch, getMovieDetails, getStreamConfig, streamURI} from "../api";
import RawPlayer from "../RawPlayer/Player";

export const Player = () => {
    const [movie, setMovie] = useState();
    const [streamConfig, setStreamConfig] = useState();
    const params = useSearchParams()[0];
    const logic = async () => {
        const [movieError, res] = await Catch(getMovieDetails(params.get("id")));
        if (movieError) return alert("Error Fetching Movie");
        setMovie(res);
        // console.log(res)
        // const torrents = res.torrents.map(torrent => ({src: streamURI + '/stream/v1/play?stream_id='+ torrent.hash + "&file=" + , type: "video/mp4"}))
        // const lowestQuality = (res.data.movie.torrents.map(torrent => parseInt(torrent.quality.slice(0, -1))).sort((a, b) => a - b)[0] + "p")
        // console.log(lowestQuality)
        const lowestResStream = res.data.movie.torrents.find(torrent => torrent.quality === (res.data.movie.torrents.map(torrent => parseInt(torrent.quality.slice(0, -1))).sort((a, b) => a - b)[0] + "p"));
        getStreamConfig(lowestResStream.hash).then(setStreamConfig);
        console.log(res.data.movie)
    }
    useEffect(() => {
        logic();
    }, []);
    return params.get("id") ? movie && streamConfig ? <RawPlayer movie={movie.data.movie} streamConfig={streamConfig}/> : "Loading" : "ID IS REQUIRED"

}
export default Player;