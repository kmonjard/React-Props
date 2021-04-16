import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Elon Musk"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V3X04eeSklhchvvPf-ftawEsEs%26pid%3DApi&f=1"
      tel="+123 456 789"
      email="elon@musk.com"
    />
    <Card
      name="Tim Cook"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aAjrUpLz_wIcfTx4NCWhbgAAAA%26pid%3DApi&f=1"
      tel="+7387384587"
      email="tim.cook.com"
    />
    <Card
      name="Jeff Bezos"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jXV5mrPUXcQSuiYVh4NFjAAAAA%26pid%3DApi&f=1"
      tel="+7387384587"
      email="jeff@bezos.com"
    />
  </div>,
  document.getElementById("root")
);
