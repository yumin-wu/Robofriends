import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${name}?200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <h2>ID: {id}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Card;
