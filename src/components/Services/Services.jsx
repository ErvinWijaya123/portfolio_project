import React from "react";
import "./Services.css";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
          </ul>
        </article>

        {/* web development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                nihil fugiat cupiditate. Voluptates voluptatibus libero adipisci
                autem quia dolore minus veniam, et delectus quos quasi inventore
                sunt quo nam quisquam!
              </p>
            </li>
          </ul>
        </article>

        {/* creation */}
      </div>
    </section>
  );
};

export default Services;
