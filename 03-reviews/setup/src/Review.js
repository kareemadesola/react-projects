import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ people }) => {
  const [person, setPerson] = useState(0);
  return (
    <section key={people[person].id} className="container">
      <article className="review">
        <div className="img-container">
          <img
            src={people[person].image}
            alt={people[person].name}
            className="person-img"
          />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{people[person].name}</h4>
        <p className="job">{people[person].job}</p>
        <p className="info">{people[person].text}</p>
        <div>
          <FaChevronLeft
            className="prev-btn"
            onClick={() => {
              setPerson((person - 1 + people.length) % people.length);
            }}
          />
          <FaChevronRight
            className="next-btn"
            onClick={() => {
              setPerson((person + 1) % people.length);
            }}
          />
        </div>
        <button
          className="random-btn"
          onClick={() => {
            const random = Math.floor(Math.random() * people.length);

            setPerson(
              random === person ? (person + 1) % people.length : random
            );
          }}
        >
          surprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
