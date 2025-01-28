import "./PlayerList.css";
import React from "react";
import Card from 'react-bootstrap/Card';

function PlayerList({ nom, equipe, nationalite, maillot, age, image }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body style={{border: "1px solid black", backgroundColor: "#f8f9fad", boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)'}}>
          <Card.Title>{nom}</Card.Title>
          <Card.Title>{equipe}</Card.Title>
          <Card.Title>{nationalite}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{maillot}</Card.Subtitle>
          <Card.Text>{age}</Card.Text>
          {/* Ajout de l'image ici */}
          <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
        </Card.Body>
      </Card>
    </>
  );
}

export default PlayerList;
