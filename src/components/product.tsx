import React from "react";

import  cocacola1 from '../assets/img/cocacola1.png'; //
import  cocacola2 from '../assets/img/cocacola2.png'; //
import  cocacola3 from '../assets/img/cocacola3.png'; //
import  cocacola4 from '../assets/img/cocacola4.png'; //

export const ProductImages: React.FC = () => {
    return (
      <div className="boximg">
        <img src={cocacola1} alt="Coca-Cola" className="img1" />
        <img src={cocacola2} alt="Coca-Cola" className="img2" />
        <img src={cocacola3} alt="Coca-Cola" className="img3" />
        <img src={cocacola4} alt="Coca-Cola" className="img4" />
      </div>
    );
  };
  