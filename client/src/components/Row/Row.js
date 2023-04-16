import React, { useState, useEffect } from 'react';
import "./Row.css";

function Row({ title, movies, isLargeRow }) {
  // const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");

  // useEffect(() => {
  // }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)
    // if (trailerUrl) {
    //   setTrailerUrl('')
    // } else {
    //   movieTrailer(movie?.title || "")
    //     .then(url => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       setTrailerUrl(urlParams.get('v'));
    //     }).catch((error) => console.log(error));
    // }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => {
          return <a href={"/watch?id=" + movie.id}><img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${isLargeRow ? movie.medium_cover_image : movie.background_image_original}`}
            alt={movie.title} /></a>
        })}
      </div>
      <div style={{ padding: "40px" }}>
        {/*{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}*/}
      </div>
    </div>
  );
}

export default Row;
