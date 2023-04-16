import React, {useEffect, useState} from "react"
import VideoJS from "../Player/VideoJS";
import "../Banner/Banner.css";
import {getMovieDetails, getMovieSuggestions, getPlaybackURL, streamURI} from "../api";
import {useSearchParams} from "react-router-dom";
import Row from "../Row/Row";
const endsWith = (ext, str) => str.slice(0, -ext.length) === ext;
const Player = ({movie, streamConfig}) => {
    const playerRef = React.useRef(null);
    // movie.torrents = movie.torrents.map(torrent => ({...torrent, magnet: `magnet:?xt=urn:btih:${torrent.hash}&dn=${encodeURIComponent(movie.title)}`}))
    // const magnetURLS = movie.torrents.map(t =orrent)`magnet:?xt=urn:btih:${movie.}&dn=${encodeURIComponent(movie.title)}`
    // console.log(getPlaybackURL(streamConfig.stream_id,streamConfig.files[0].hash))
    console.log(streamConfig.files.find(file => file.name.endsWith(".mp4")?.hash))
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        poster: movie.background_image_original,
        sources: [{src: getPlaybackURL(streamConfig.stream_id, streamConfig.files.find(file => file.name.endsWith(".mp4")).hash), type: "video/mp4"}]
        // Souurces would come from a function which renders all source urls
        // sources: movie.torrents.map(torrent => ({src: streamURI + '/stream/v1/play?stream_id='+ torrent.hash + "&file=" + , type: "video/mp4"}))
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            player.log('player is waiting');
        });

        player.on('dispose', () => {
            player.log('player will dispose');
        });
    };
    const [suggestions, setSuggestions] = useState();
    useEffect(() => {
        getMovieSuggestions(movie.id).then(setSuggestions);
    }, [])

    return (
        <div style={{

            minHeight: "100vh",
            minWidth: "100vw",
        }}>
            <div
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                }}>
                <div style={{
                    padding: "5rem 1rem",
                    minWidth: "60vw", minHeight: "auto", maxWidth: "40rem", width: "100%", height: "auto"
                }}>
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
                    <div style={{
                        marginTop: "1rem"
                    }}>
                        <h1 style={{
                            color: "white"
                        }}>{movie.title}</h1>
                        <p style={{
                            color: "whitesmoke"
                        }}>{movie.description_full}</p>
                        <a href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`} target={"_blank"}>Watch
                            Trailer</a>
                    </div>
                </div>
                <br/>
                {/*<video id="video_1" style={{*/}
                {/*    padding: "0 1rem",*/}
                {/*    minWidth: "70vw", minHeight: "auto", width: "100%", height: "auto"*/}
                {/*}} className="video-js vjs-default-skin" controls preload="auto" width="640" height="268">*/}
                {/*    <source src="http://localhost:3000/" type="video/mp4" label="720P"/>*/}
                {/*    <source src="http://localhost:3000/" type="video/mp4" label="480P" selected="true"/>*/}
                {/*    <source src="http://localhost:3000/" type="video/mp4" label="360P"/>*/}
                {/*</video>*/}
            </div>
            {suggestions ? <div style={{
                width: "100vw"
            }}><Row title={"You might like"} isLargeRow={true} movies={suggestions.data.movies}/></div> : null}
        </div>
    )
}
export default Player;