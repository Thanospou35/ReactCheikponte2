import "./Player.css";
import React from "react";

import PlayerList from "../PlayerList/PlayerList";
import joueurs from "../../Players";

function template() {
  return (
    <>
    <section>
      <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "5%"}}>
        {joueurs.map((adverse) => (
          <div key={adverse.id}><PlayerList nom={adverse.nom} equipe={adverse.equipe} nationalite={adverse.nationalite} maillot={adverse.maillot} age={adverse.age} image={adverse.image}/>
          </div>
        ))}
      </div>
    </section>
    <PlayerList/>
    </>
  );
};

export default template;
