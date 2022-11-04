import "./ItemPage.css";
import "../Main/Main.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import juicers from "../../resources/items/Juicers.js";

const ItemPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState(juicers);
  const item = items.find((item) => item.id == id);

  return (
    <section>
      <div className="item_info">
        <img className="item_img" src={item.picture} alt="Juicer"></img>
        <div className="item_description">
          <h1>{item.model}</h1>
          <p>{item.text}</p>
          <p>Power: {item.power}W</p>
          <p>Is in stock: {String(item.inStock)}</p>
          <span>Warranty:</span>
          <select className="warranty">
            <option>No warranty</option>
            <option>6 month</option>
            <option>1 year</option>
            <option>2 years</option>
            <option>3 years</option>
          </select>
          <span>Color</span>
          <select className="color">
            <option>Black</option>
            <option>Grey</option>
            <option>White</option>
          </select>
        </div>
      </div>
      <div className="operations">
        <p>Price: ${item.price}</p>
        <button className="button">
          <Link to="/catalog" className="go_back">
            Go back
          </Link>
        </button>
        <button className="button">
          <Link to="/cart" className="add_to_cart">
            Add to cart
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ItemPage;
