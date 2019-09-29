import React from "react";
import img1 from "../../img/O mnie/laptop.png";
import img2 from "../../img/O mnie/ludek.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <main className="AboutMe">
        <header>
          <p>About Me</p>
        </header>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            illo autem perferendis sunt sit quam debitis! Vitae perferendis nam
            blanditiis at nobis ratione officiis deleniti qui cupiditate,
            officia ipsam eum.
          </p>
          <img src={img1} alt="" />
        </div>
        <footer>
            <p>Radosław Matlak Programming</p>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </footer>
        <img src={img2} alt="" className="person"/>
      </main>
    </>
  );
};

export default AboutMe;
