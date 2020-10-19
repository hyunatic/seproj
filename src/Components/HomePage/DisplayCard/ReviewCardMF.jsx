import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/da363cc138f945b19850a80e010fa6e2_9366/Adilette_Comfort_Slides_Black_AP9966_01_standard.jpg",
      title: "Adidas Sliders",
      text: "Used, Condition: 6/10, Previously used for shower",
    },
    {
      image:"https://cache.net-a-porter.com/images/products/1212990/1212990_fr_2000_q80.jpg",
      title: "Gold Frame Lenless spectacles",
      text: "New",
    },
    {
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/45dcf42f193040e88c2aaa8d00e01770_9366/4ATHLTS_Duffel_Bag_Small_Black_FJ9353_01_standard.jpg",
      title: "Duffel bag suited for daily use",
      text: "Used, Condition: 7/10, can be used as a gym bag",
    },
    {
      image: "https://d15udtvdbbfasl.cloudfront.net/catalog/product/large_image/63_172047.jpg",
      title: "Denim Shorts",
      text: "Pre-loved item, Size 36",
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