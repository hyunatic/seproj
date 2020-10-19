import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://rukminim1.flixcart.com/image/352/352/jxkpx8w0/hair-accessory/n/z/h/multi-coloured-baby-girl-hairband-headbands-rabbit-ear-3-rabbit-original-imafhvwdwgvh5tak.jpeg?q=70",
      title: "Hairband",
      text: "Used, Condition: 8/10",
    },
    {
      image:"https://cdn11.bigcommerce.com/s-wnvd3r1/images/stencil/1280x1280/products/80/286/Adult_Pink_Leather_Belt_with_Round_Buckle__07956.1405948731.jpg?c=2",
      title: "Pink Leather Belt",
      text: "Used, Condition: 7/10, waist size: 23",
    },
    {
      image: "https://assets.marthastewart.com/styles/wmax-520-highdpi/d25/diy-scrunchies-final-0119/diy-scrunchies-final-0119_vert.jpg?itok=yHhmVFRB",
      title: "Korean style scrunchies",
      text: "5x New Scrunchies",
    },
    {
      image: "https://cottonon.com/on/demandware.static/-/Sites-catalog-master-typo/default/dw33424ab7/145819/145819-00-2.jpg",
      title: "Totebag for daily fashion",
      text: "New, can fit A4 items",
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