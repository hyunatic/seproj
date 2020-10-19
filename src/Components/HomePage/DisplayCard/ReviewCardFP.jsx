import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://m.media-amazon.com/images/I/51ecW0uUqrL.jpg",
      title: "Samyang instant noodles",
      text: "3x Samyang individual packs",
    },
    {
      image:"https://www.homenoffice.sg/image/cache/data/Product%20Pictures/009039-1000x1000.jpg",
      title: "Nescafe 3-in-1 coffee",
      text: "Opened, 18 sachets left",
    },
    {
      image: "https://www.wangwang.sg/wp-content/uploads/2019/08/Pokka-oolong-500ml.jpg",
      title: "Oolong tea bottled drink",
      text: "18x 500ml bottles",
    },
    {
      image: "https://www.cellarbration.com.sg/content/images/thumbs/0002713_carlsberg-green-label-beer-can-24-x-320ml.jpeg",
      title: "Carlsberg",
      text: "10x 350ml cans",
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