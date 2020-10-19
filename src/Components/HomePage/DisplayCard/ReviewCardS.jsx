import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const ReviewCardE = () => {
  const cardInfo = [
    {
      image: "https://media.karousell.com/media/photos/products/2018/08/18/kck_watercolor_canvas_panel_1534586968_5bd78586.jpg",
      title: "Watercolour Canvas Panel",
      text: "1x new canvas",
    },
    {
      image:"https://media.karousell.com/media/photos/products/2017/12/17/muji_a4_grid_foolscap_1513449349_ff7399b3.jpg",
      title: "Muji A4 foolscap",
      text: "Opened with 30 sheets remaining",
    },
    {
      image: "https://cottonon.com/on/demandware.static/-/Sites-catalog-master-typo/default/dwf971efcf/123589/123589-179-2.jpg",
      title: "Stationary holder",
      text: "Used, condition: 8/10",
    },
    {
      image: "https://www.homenoffice.sg/image/cache/data/Product%20Pictures/Uni-Ball%20Signo%20DX%20Gel%20Ink%20Pen%200.38mm%20Refill-1000x1000.jpg",
      title: "Uniball signo DX refill",
      text: "10x blue refill, 5x black refill",
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