import React, {useEffect, useState} from "react"
import VideoJS from "../Player/VideoJS";
import "../Banner.css";
import {getMovieDetails, streamURI} from "../api";
import {useSearchParams} from "react-router-dom";

const Player = ({movie}) => {
    const playerRef = React.useRef(null);
    // movie.torrents = movie.torrents.map(torrent => ({...torrent, magnet: `magnet:?xt=urn:btih:${torrent.hash}&dn=${encodeURIComponent(movie.title)}`}))
    // const magnetURLS = movie.torrents.map(t =orrent)`magnet:?xt=urn:btih:${movie.}&dn=${encodeURIComponent(movie.title)}`

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: movie.torrents.map(torrent => ({src: streamURI + '/stream/v1/?hash='+ torrent.hash + "&dn=" + encodeURIComponent(movie.title), type: "video/mp4"}))
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

    return (
        <div
            style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: "100vh",
                minWidth: "100vw",
            }}>
            <div style={{
                padding: "5rem 1rem",
                minWidth: "70vw", minHeight: "auto", width: "100%", height: "auto"
            }}>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                <div style={{
                    marginTop: "1rem"
                }}>
                    <h1 style={{
                        color: "white"
                    }}>{movie.title}</h1>
                    <p style={{
                        color: "whitesmoke"
                    }}>{movie.description_full}</p>
                    <a href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`} target={"_blank"}>Watch Trailer</a>
                </div>
            </div>
            {/*<video id="video_1" style={{*/}
            {/*    padding: "0 1rem",*/}
            {/*    minWidth: "70vw", minHeight: "auto", width: "100%", height: "auto"*/}
            {/*}} className="video-js vjs-default-skin" controls preload="auto" width="640" height="268">*/}
            {/*    <source src="http://localhost:3000/" type="video/mp4" label="720P"/>*/}
            {/*    <source src="http://localhost:3000/" type="video/mp4" label="480P" selected="true"/>*/}
            {/*    <source src="http://localhost:3000/" type="video/mp4" label="360P"/>*/}
            {/*</video>*/}
        </div>
    )
}
export default Player;