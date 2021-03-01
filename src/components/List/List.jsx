import React from 'react';
import './List.scss';
import mercedes from '../car_jpg/mercedes.jpg';
import checkmark from '../cart-img/checkmark.svg';
import google from '../cart-img/google.png';
import cardote from '../cart-img/cardote.svg';




const List = () => {
    return (
        
        <div className="flex-container">
    <div className="box-1">
    <div className="list--border-google"></div>
    <img src={google} className="list--google" alt="img" />
    <img src={checkmark} className="list--checkmark" alt="img" />
    <img src={cardote} className="list--other-cardote" alt="img" />
    <p className="car--user-name">Անուն Ազգանուն</p>
    <img src={mercedes} className="car--img-container" alt="car jpg" />
    <ul className="ul">
  <li>Audi A4 2006</li>
  <li>Բենզին 133000 կմ</li>
  <li><b>4500$</b></li>
</ul>
    
    </div>

<div className="box-2">
<div className="list--border-google"></div>
    <img src={google} className="list--google" alt="img" />
    <img src={checkmark} className="list--checkmark" alt="img" />
    <img src={cardote} className="list--other-cardote" alt="img" />
    <p className="car--user-name">Անուն Ազգանուն</p>
    <img src={mercedes} className="car--img-container" alt="car jpg" />
    <ul className="ul">
  <li>Audi A4 2006</li>
  <li>Բենզին 133000 կմ</li>
  <li><b>4500$</b></li>
</ul>
</div>

<div className="box-3">
<div className="list--border-google"></div>
    <img src={google} className="list--google" alt="img" />
    <img src={checkmark} className="list--checkmark" alt="img" />
    <img src={cardote} className="list--other-cardote" alt="img" />
    <p className="car--user-name">Անուն Ազգանուն</p>
    <img src={mercedes} className="car--img-container" alt="car jpg" />
    <ul className="ul">
  <li>Audi A4 2006</li>
  <li>Բենզին 133000 կմ</li>
  <li><b>4500$</b></li>
</ul>
</div>
    </div>
)
}


export default List;