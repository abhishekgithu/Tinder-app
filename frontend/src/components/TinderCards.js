import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("http://localhost:8001/tinder/cards");
      setPeople(req.data);
      console.log(req.data);
    };
    fetchData();
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

// { "name": "Drew Barrymore", "imgUrl": "https://media.gettyimages.com/id/461984648/photo/actress-drew-barrymore-attends-the-daily-front-row-fashion-los-angeles-awards-show-at-sunset.jpg?s=612x612&w=gi&k=20&c=KTTTewTjsRuk8sEDgQId2MQS5KsmoijgE_2vyXC-Sfo=" },
// { "name": "Elon Musk", "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" },
// { "name": "Sandra Bullock", "imgUrl": "https://media.architecturaldigest.com/photos/6088781eabd61a148adb13e2/16:9/w_2560%2Cc_limit/1074346390" }
