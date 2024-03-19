import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/image/e.commerce.jpg";
import IMG2 from "../../assets/image/e.commerce2.jpg";
import IMG3 from "../../assets/image/fashion.jpg";
import IMG4 from "../../assets/image/clothes.png";
import IMG5 from "../../assets/image/baby_blues.jpg";
import IMG6 from "../../assets/image/store.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E.commerce",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "E.commerce",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Fashion",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Clothes",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Baby",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Store",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>

            <div className="portfolio__item-cta">
              <a href={github} className="btn" target={"_blank"}>
                GitHub
              </a>
              <a href={demo} className="btn btn-primary" target={"_blank"}>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
