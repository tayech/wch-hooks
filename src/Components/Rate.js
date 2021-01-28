import React from "react";

const Rate = ({ raiting, setRate }) => {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < raiting) {
      arr.push(
        <span key={i}
          className="raiting"
          style={{cursor: "pointer"}}
          onClick={() => setRate(i + 1)}
        >
          ★
        </span>
      );
    } else {
      arr.push(
        <span key={i}
          className="raiting"
          style={{ cursor: "pointer" }}
          onClick={() => setRate(i + 1)}
        >
          ☆
        </span>
      );
    }
  }

  return <div>{arr}</div>;
};

export default Rate;