import React from "react";
import "./MainSite.css";
import { NavLink } from "react-router-dom";
import img1 from "../../img/tytułowa/rm.png";
import img2 from "../../img/tytułowa/ludek maøy.png";
import img3 from "../../img/tytułowa/zeszyt.png";
import img4 from "../../img/tytułowa/zarówka.png";
import img5 from "../../img/tytułowa/koperta mala.png";
import img6 from "../../img/tytułowa/Radek.png";
import img7 from "../../img/tytułowa/hello.png";
import img8 from "../../img/tytułowa/krecha2.png";
import img9 from "../../img/tytułowa/krecha1.png";
import img10 from "../../img/tytułowa/krecha.png";

const MainSite = () => {
  return (
    <>
      <div className="mainSite">
        <nav>
          <ul>
            <li>
              <img src={img1} alt="Main" />
            </li>
            <li>
              <NavLink to="/about">
                <img src={img2} alt="About me" />
              </NavLink>
            </li>
            <li>
              <img src={img3} alt="Offer" />
            </li>
            <li>
              <img src={img4} alt="Portfolio" />
            </li>
            <li>
              <img src={img5} alt="Contact" />
            </li>
          </ul>
        </nav>
        <main>
          <img src={img9} alt="" />
          <img className="Me" src={img6} alt="Me" />
          <div className="Hello">
            <img className="Stripe" src={img8} alt="stripe" />
            <img src={img7} alt="Hello" />
            <p>My name is Radek and I am junior front end developer.</p>
          </div>
        </main>
        <footer>
          <p>Radosław Matlak Programming</p>
          <img className="Footer" src={img10} alt="" />
        </footer>
      </div>
    </>
  );
};

export default MainSite;
