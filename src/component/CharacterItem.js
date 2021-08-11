import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            style={{
              position: "absolute",
              width: "100%",
              height: "300px",
              objectFit: "cover",
              transition: "0.5s",
            }}
            src={item.img}
            alt=""
          />
        </div>

        <div className="card-back">
          <h1>{item.name}</h1>
          <hr></hr>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>DOB:</strong> {item.birthday}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <a href="!#">Read More</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
