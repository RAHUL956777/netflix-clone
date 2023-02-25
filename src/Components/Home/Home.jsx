import React from "react";
import "./Home.scss";

const Card = ({ img }) => {
  <img src={img} alt="cover" />;
};

const Row = ({ title }) => {
  <div>
    <h2>{title}</h2>

    <Card
      img={
        "https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg"
      }
    />
  </div>;
};

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>

      <Row />
    </section>
  );
};

export default Home;
