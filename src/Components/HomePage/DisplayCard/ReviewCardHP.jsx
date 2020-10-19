import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://cdn11.bigcommerce.com/s-knrdocushe/images/stencil/1280x1280/products/11931/21552/4801234108038__24180.1573635984.jpg?c=2",
      title: "Baygon multi insect killer",
      text: "Used, at least half bottle left",
    },
    {
      image:"https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13076252_XL1.jpg",
      title: "Detergent Dynamo",
      text: "Used, half bottle remaining",
    },
    {
      image: "https://www.waangoo.com/content/images/thumbs/0016958_leopard-6-gallon-pail-bucket_600.jpeg",
      title: "Pail",
      text: "Used previously for floor wiping",
    },
    {
      image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13020660_XL1.jpg",
      title: "Magiclean mop",
      text: "Used, comes with 1x paper refill",
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