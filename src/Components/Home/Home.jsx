import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey = "f5bcb9699ca9b7e7a0eac288bd4ec870";
const url = "https://api.themoviedb.org/3/movie";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upComing = "upcoming";
const nowplaying = "now_playing";
const popular = "popular";
const toprated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    // {
    //   img: "https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg",
    // },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {/* <Card img={ "https://sg-res.9appsdownloading.com/sg/res/jpg/df/11/a9ce3c004e577209961f1ce7edd5-pbi.jpg"} />
    <Card img={ "https://c.saavncdn.com/188/Shamshera-Hindi-2022-20220707094545-500x500.jpg"} />
    <Card img={ "https://vijaysolution.com/wp-content/uploads/2022/12/Avatar-The-Way-Of-Water-Download-FilmyZilla-300MB-700MB.jpg"} />
    <Card img={ "https://vijaysolution.com/wp-content/uploads/2022/12/Avatar-The-Way-Of-Water-Download-FilmyZilla-300MB-700MB.jpg"} />
    <Card img={ "https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg"} />
    <Card img={ "https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg"} /> */}

      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [nowplayingMovies, setnowplayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topratedMovies, settopratedMovies] = useState([]);

  useEffect(() => {
    const fecthUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upComing}/?api_key=${apiKey}`);
      setupcomingMovies(results);
    };

    const fecthNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowplaying}/?api_key=${apiKey}`);
      setnowplayingMovies(results);
    };

    const fecthPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}/?api_key=${apiKey}`);
      setpopularMovies(results);
    };

    const fecthToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${toprated}/?api_key=${apiKey}`);
      settopratedMovies(results);
    };

    // function call
    fecthUpcoming();
    fecthNowplaying();
    fecthPopular();
    fecthToprated();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: upcomingMovies[5]
            ? `url(${`${imgUrl}/${upcomingMovies[5].poster_path}`})`
            : "rgb:(16,16,16)",
        }}
      ></div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now playing Movies"} arr={nowplayingMovies} />
      <Row title={"Populer Movies"} arr={popularMovies} />
      <Row title={"Toprated Movies"} arr={topratedMovies} />
    </section>
  );
};

export default Home;
