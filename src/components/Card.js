import React from "react";
import "./Card.css";
import star from "../images/star.png";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <>
      <div className="card">
        {badgeText && <div className="openSpot">{badgeText}</div>}
        <img
          src={`../pictures/${props.coverImg}`}
          className="card-image"
          alt="card"
        />
        <h6>
          {" "}
          <img className="star" src={star} alt="" srcset="" />
          <span className="rating">
            {" "}
            <bold>{props.stats.rating}</bold> ({props.stats.reviewCount}){" "}
          </span>
          <span className="location"> • {props.location}</span>
        </h6>
        <h6 className="title">{props.title}</h6>
        <h6 className="line3">
          <bold>From ${props.price}</bold> / person
        </h6>
      </div>
    </>
  );
}
