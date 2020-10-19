import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://www.ikea.com/sg/en/images/products/flisat-childrens-stool__0727952_PE735964_S5.JPG",
      title: "Stool",
      text: "Used, Condition: 8/10",
    },
    {
      image:"https://images-na.ssl-images-amazon.com/images/I/91Oy8v4fcxL._AC_SL1500_.jpg",
      title: "Bedside table",
      text: "Used, Condition: 7/10",
    },
    {
      image: "https://pyxis.nymag.com/v1/imgs/de6/c3e/919b5ae4a4442ce6416b341e47f7cbdb51.rdeep-vertical.w245.jpg",
      title: "Small bedtime lamp",
      text: "Used, Condition: White frame has turned slightly yellow",
    },
    {
      image: "https://www.ikea.com/sg/en/images/products/tjusig-shoe-rack-black__0710715_PE727750_S5.JPG?f=xs",
      title: "Shoe rack",
      text: "Used, fits 12 pairs of shoes",
    },
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card border="secondary" style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default ReviewCardE;