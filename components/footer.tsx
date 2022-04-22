import React, { Component, useEffect, useState } from "react";


const Footer = () => {


  let oldScrollY = 0;

const [direction, setDirection] = useState('up');

const controlDirection = () => {
    if(window.scrollY || window.scrollY !== 0) {
        setDirection('scrolled');
    } else {
     
        setDirection('notscrolled');
    }
    oldScrollY = window.scrollY;
}

useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
        window.removeEventListener('scroll', controlDirection);
    };
},[]);


  return (
    <div className={direction === "scrolled" ? "footer-base" : "footer-base fixed"}>  
    <footer >
        {/* <div className="footer-content">
            <p> Here each tutorial is beautifully described .</p>
    
        </div> */}
        <div className="footer-bottom">
            <p>copyright &copy; <a href="#">Chohanics</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Contact</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    </div>
  )
};

export default Footer;

