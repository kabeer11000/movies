import React, {useEffect, useState} from 'react';
import './App.css';
import Row from './Row/Row';
import requests from './requests';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import {getAllMovies} from "./api";
import {
    BrowserRouter as Router, Route, Routes, useLocation
} from "react-router-dom"
import Player from "./Player/Player";
import Home from "./Home";
import WebTorrent from "webtorrent";
import SearchDialog from "./SearchDialog";
import {SearchDialogContext} from "./Contexts";


const TestWatch = () => {
    const [state, setState] = useState();
    useEffect(() => {
        var client = new WebTorrent()

        var torrentId = '259388538FA3C1872D971486F3421D27A557B026'

        client.add(torrentId, function (torrent) {
            // Torrents can contain many files. Let's use the .mp4 file
            var file = torrent.files.find(function (file) {
                return file.name.endsWith('.mp4')
            })

            // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
            file.appendTo('body')
        })
    }, [])
    return <div>Kabeer</div>
}

function App() {
    const route = useLocation().pathname;
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <div className="app">
            <SearchDialogContext.Provider value={[searchOpen, setSearchOpen]}>
                <SearchDialog/>
            </SearchDialogContext.Provider>
            <Nav/>
            {/*<Switch>*/}
            {/*<Routes>*/}
            {/*<Route exact path={"*"}>*/}
            {/*    Hello*/}
            {/*</Route>*/}
            {route === "/" && <Home/>}
            {route === "/watch" && <Player/>}
            {route === "/test-watch" && <div><TestWatch/></div>}
            <SearchDialog/>

            {/*<Route exact path="/" element={Home}/>*/}
            {/*<Route exact path="/watch" element={Player}/>*/}
            {/*</Routes>*/}
            {/*</Switch>*/}
            {/*<Row title="Trending" fetchUrl={requests.fetchTrending} />*/}
            {/*<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />*/}
            {/*<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />*/}
            {/*<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />*/}
            {/*<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />*/}
            {/*<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />*/}
            {/*<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />*/}

        </div>
    );
}

export default App;
