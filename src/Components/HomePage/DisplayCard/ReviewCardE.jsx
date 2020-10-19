import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";


const ReviewCardE = () => {
  const cardInfo = [
    {
      name: "Weijian",
      image: "https://newairfryers.com/content/images/size/w2000/2020/01/61Vm8uZfu4L._AC_SL1000_-1.jpg",
      title: "Airfryer",
      text: "Used, Condition: 8/10",
    },
    {
      name: "Jolene",
      image:"https://cdn.shopify.com/s/files/1/2702/1010/products/PP468_fef2ec35-b174-4c0e-8896-894e9a204a18_1200x1200.jpg?v=1602967273",
      title: "4 Ways Extension Cord",
      text: "Used, Condition: 7/10",
    },
    {
      name: "Jewel",
      image: "https://www.courts.com.sg/media/catalog/product/i/p/ip139728_00_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      title: "Fridge",
      text: "Used, 110L, school approved",
    },
    {
      name: "Wee",
      image: "https://img-us1.asus.com/A/show/AW000706/2020/0207/AM0000008/202002AM070000008_15810244138599720019896.jpg",
      title: "Asus router",
      text: "New for 4 years, suitable for school used and gaming",
    },
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card border="secondary" style={{ width: "18rem" }} key={index} className="box">
        <Card.Header>{card.name}</Card.Header>
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