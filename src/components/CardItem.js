import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="card-item">
        <Link className="card-item__link" to={props.path}>
          <figure className="card-item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Foggg Image"
              className="card-item__img"
            ></img>
          </figure>
          <div className="card-item__info">
            <h5 className="card-item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
