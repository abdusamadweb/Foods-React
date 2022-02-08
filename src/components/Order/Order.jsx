import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <div className='order'>
      <span className='order__title'>Orders #34562</span>
      <div className='order__btns'>
        <button className='order__btn primary-btn'>Dine In</button>
        <button className='order__btn border-btn'>To Go</button>
        <button className='order__btn border-btn'>Delivery</button>
      </div>
      <ul className='order__nav row between'>
        <li className='order__nav-item'>
          Item
        </li>
        <li className='order__nav-item'>
          Qty
        </li>
        <li className='order__nav-item'>
          Price
        </li>
      </ul>
    </div>
  );
}

export default Order;
