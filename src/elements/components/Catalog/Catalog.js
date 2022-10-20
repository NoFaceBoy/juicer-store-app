import "./Catalog.css";
import Juciers from "../../resources/items/Juicers.js";

const Catalog = () => {
  const items = Juciers;
  return (
    <main>
      <section className="sorting_options">
        <div>
          <p>Price, $</p>
          <input placeholder="From" className="price_from_input" />
          <input placeholder="To" className="price_to_input" />
        </div>
        <div>
        <p>Power, W</p>
          <input placeholder="From" className="price_from_input" />
          <input placeholder="To" className="price_to_input" />
        </div>
        <div>
          <input type="checkbox" id="stock" />
          <label>In stock</label>
        </div>
        <button className="apply button">Apply</button>
        <input placeholder="Input brand to search" className="search_input" />
      </section>
      <div className="line"></div>
      <section className="items_list">
        <div className="catalog_item">{items}</div>
      </section>
    </main>
  );
};

export default Catalog;
