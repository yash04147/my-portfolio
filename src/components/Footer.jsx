import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/99865229?v=4"}
          alt="Founder"
        />

        <h2>Yashendra Pratap Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://linkedin.com/in/yash04147" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/yash04147" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/yash04147" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
