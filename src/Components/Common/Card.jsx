import React from "react";
import "./card.css";

function Card({ head, paragraph, cost }) {
  return (
    <div className="card">
      <img src="image.webp" className="img" />
      <div className="details">
        <h1 className="head">{head} Module</h1>
        <p>
          Manage your {paragraph} in one place with ease and do much more...
          <br />
          <br />
          For as low as
          <div className="buttom">
            <h3>N{cost}NGN </h3>
            <p style={{ padding: 5 }}> per employer</p>
          </div>
        </p>
      </div>
    </div>
  );
}
export default Card;
