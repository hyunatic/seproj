import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://rehabshop.com.sg/image/cache/catalog/product/Zappy%20Alcohol%20Wipe-1000x1000.jpg",
      title: "Zappy wipes",
      text: "34x 1 piece Alcohol wipes",
    },
    {
      image:"https://smhttp-ssl-20535-live.nexcesscdn.net/media/catalog/product/cache/30a903ea000a9e1b372518e5a6ce2123/j/c/jc-cwf-ea_6.jpg",
      title: "Clorox wipes",
      text: "Used with remaining of half roll",
    },
    {
      image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/32227_LXL1.jpg",
      title: "Darlie Toothpaste",
      text: "New",
    },
    {
      image: "https://www.koreadepart.com/data/item/1505891486_l1",
      title: "The Face Shop facial mask",
      text: "5x blueberry face mask",
    },
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
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