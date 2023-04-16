import React, { useState, useEffect } from 'react'
import "./Banner.css"

function Banner({movie}) {
  // const [movie, setMovie] = useState([]);


  // console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "${movie?.background_image_original}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div style={{padding: "1rem 0"}} className="banner_buttons">
          <a href={"/watch?id=" + movie?.id}><button className="banner_button">Stream</button></a>
          <a target={"_blank"} href={"https://youtube.com/watch?v=" + movie?.yt_trailer_id}><button className="banner_button">Trailer</button></a>
        </div>
        <h1 className="banner_description">{movie?.synopsis}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>

  )
}

export default Banner
