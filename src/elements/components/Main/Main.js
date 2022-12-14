import "./Main.css";
import React, { useState, useEffect } from "react";
import { getItems } from "../../api/items_api.js";
import Preview from "../Preview/Preview.js";
import Card from "../Card/Card.js";
import Loader from "../Loader/Loader.js";

const Main = () => {
  const [number, setNumber] = useState(3);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const showMore = () => {
    if (number < 6) {
      setNumber(number + 3);
      setText("View less");
    } else {
      setNumber(number - 3);
      setText("View more");
    }
  };

  const [button_text, setText] = useState("View more");

  return (
    <main className="main">
      <Preview />
      <div className="items">
        {loading && <Loader />}
        {items.slice(0, number).map(({ id, picture, model, text, price }) => (
          <Card
            id={id}
            picture={picture}
            model={model}
            text={text}
            price={price}
            key={id}
          />
        ))}
      </div>
      <div className="items_container">
        {!loading && (
          <button className="view_more button" onClick={() => showMore()}>
            {button_text}
          </button>
        )}
      </div>
    </main>
  );
};

export default Main;
