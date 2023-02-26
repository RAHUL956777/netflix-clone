import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey = "f5bcb9699ca9b7e7a0eac288bd4ec870";
const url = "https://api.themoviedb.org/3/movie";
const upComing = "upcoming";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg",
    },
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
        <Card key={index} img={item.img} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcoming, setupcoming] = useState([]);

  useEffect(() => {
    const fecthUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upComing}/?api_key=${apiKey}`);
      setupcoming(results);
    };

    fecthUpcoming();
  }, []);

  return (
    <section className="home">
      <div className="banner"></div>

      <Row title={"popular on netflix"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viwed"} />
      <Row title={"My List"} />
    </section>
  );
};

export default Home;
