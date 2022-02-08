import React from "react";
import Card from "../components/Card/Card";
import "../components/Home/Home.css";
import HomeNav from "../components/Home/HomeNav";

import { hotDishes } from "../assets/js/data/Dishes";

console.log(hotDishes);

const Home = () => {
  return (
    <div className="home">
      <div className="home__header row between align-center">
        <div className="home__titles">
          <h2 className="home__title">Jaegar Resto</h2>
          <time className="home__time" dateTime="02-02-2021">
            Tuesday, 2 Feb 2021
          </time>
        </div>
        <div className="home__search relative-p">
          <span className="center-absolute search-icon">
            <i className="fal fa-search"></i>
          </span>
          <input
            className="home__inp"
            type="search"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </div>
      <HomeNav />
      <div className="home__product product">
        <div className="product__titles row between aign-center">
          <h3 className="product__title">Choose Dishes</h3>
          <select className="product__select" name="select">
            <option value="1">Dine In</option>
          </select>
        </div>
        <ul className="product__cards row between">
          {hotDishes.map((card, index) => (
            <Card
              img={card.foodImg}
              title={card.foodName}
              price={card.foodPrice}
              bowl={card.isAvailable}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
