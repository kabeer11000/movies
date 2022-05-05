import React, {useEffect, useState} from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import {getAllMovies} from "./api";
import {
    BrowserRouter as Router, Route, Routes, useLocation
} from "react-router-dom"
import Player from "./Player/Player";
import Home from "./Home";

function App() {
    const route = useLocation().pathname;
    return (
        <div className="app">
                <Nav/>
                {/*<Switch>*/}
                {/*<Routes>*/}
                {/*<Route exact path={"*"}>*/}
                {/*    Hello*/}
                {/*</Route>*/}
                {route === "/" && <Home/>}
                {route === "/watch" && <Player/>}

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
