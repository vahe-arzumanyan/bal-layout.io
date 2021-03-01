import React  from 'react';
import './Header.scss';
import hamburger from '../header-img/hamburger.svg';
import bal from '../header-img/bal.svg';
import search from '../header-img/search.svg';
import flag from '../header-img/flag.svg';
import basket from '../header-img/basket.svg';

const Header = () =>{
    return (
        <div className="nav--header">
    <img src={hamburger} className="nav--hamburger" alt="menu" />
    <img src={bal} className="nav--bal-logo" alt="bal logo"/>
    <div className="nav--bal-am-text">Bal.am</div>
<input type="text" placeholder="search" maxLength="32"  className="input--search" />
<img src={search} alt="search" className="nav--input-search-icon"></img>
<div className="nav--login-box">
<h3 className="nav--login-text">Մուտք</h3></div>
    <select name="change" className="nav--amount">
<option value="amd">AMD</option>
<option value="ru">RU</option>
<option value="us">US</option>
<option value="eu">EU</option>
    </select>
   <img src={flag} alt="flag" className="nav--flag" alt="flag" />
   <img src={basket} alt="basket" className="nav--basket" alt="basket" />
</div>
    );
}

export default Header;