import React from 'react';
import './Card.css';

const Card = ({img, title, price, bowl, key}) => {
  return (
    <li className='card'>
      <img className='center-absolute card__img' src={img} alt="img" />
      <div className='card__titles'>
        <h4 className='card__title'>{title}</h4>
        <span className="card__price">{price}</span>
        <span className="card__available">{bowl}</span>
      </div>
    </li>
  );
}

export default Card;
