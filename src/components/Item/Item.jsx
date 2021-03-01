import React from 'react';
import './Item.scss';
import  balitem from '../nav-img/balitem.svg';
import  bell from '../nav-img/bell.svg';
import  dot from '../nav-img/dot.svg';
import  add from '../nav-img/add.svg';
import  booth from '../nav-img/booth.svg';

const Item = () => {
    return (
       <div className="item" >
       <div className="item--left-widows">
          <img src={balitem} alt="bal" className="item--bal-windows" />
          <img src={bell} alt="bell" className="item--bell-windows" />
          <img src={dot} alt="dot" className="item--dot-windows"  />
          <img src={add} alt="add" className="item--add-windows"/>
          <img src={booth} alt="booth" className="item--booth-windows" /> 
       </div>
       <div className="advertisement"></div>
       </div>
    )
  };
  
  
  export default Item;