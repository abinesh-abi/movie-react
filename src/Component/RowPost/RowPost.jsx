import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./RowPost.css";

function RowPost(props) {
  // states
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  // useffect
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => alert("network error"));
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results[0]) {
          setUrlId(response.data.results[0])
        }else{
          console.log('Array empy')
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((values, index) => (
          <img
            onClick={() => handleMovie(values.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={imageUrl + values.backdrop_path}
          />
        ))}
      </div>
    { urlId && <YouTube videoId={urlId.key} opts={opts} /> }  
    </div>
  );
}

export default RowPost;
