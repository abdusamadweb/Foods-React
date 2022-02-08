import React from 'react';

const HomeNav = () => {
  return (
    <div className="home__nav">
      <ul className='home__list row'>
        <li className='home__item'>
          <button className='home__link active'>
            Hot Dishes
          </button>
        </li>
        <li className='home__item'>
          <button className='home__link'>
            Grill
          </button>
        </li>
        <li className='home__item'>
          <button className='home__link'>
            Soup Foods
          </button>
        </li>
        <li className='home__item'>
          <button className='home__link'>
            Cold Dishes
          </button>
        </li>
        <li className='home__item'>
          <button className='home__link'>
            Appetizer
          </button>
        </li>
        <li className='home__item'>
          <button className='home__link'>
            Dessert
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HomeNav;
