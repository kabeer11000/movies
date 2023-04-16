import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {
    useLocation
} from "react-router-dom"
import Player from "./components/Player/Player";
import Home from "./Home";
import SearchDialog from "./SearchDialog";
import {SearchDialogContext} from "./Contexts";


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
            {/*{route === "/test-watch" && <div><TestWatch/></div>}*/}
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
