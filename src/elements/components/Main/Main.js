import "./Main.css";
import Card from "../Card/Card.js";
import Preview  from "./Preview.js"
import Juicer1 from "../../resources/images/juicer1.png";
import Juicer2 from "../../resources/images/juicer2.png";
import Juicer3 from "../../resources/images/juicer3.png";

const Main = () => {
  return (
    <main className="main">
      <Preview />
        <div className="items">
          <Card
            picture={Juicer1}
            model={"H310 Easy Clean Slow Juicer"}
            text={
              "Juicer packs a serious punch in its retro-chic casing. The smallest among the juicers, the H310 is perfect for small kitchens or for gifting. Don’t be fooled by the compact size, though! Save more time to enjoy high-quality, nutritious juice."
            }
            price={379}
          ></Card>
          <Card
            picture={Juicer2}
            model={"H200 Easy Clean Slow Juicer"}
            text={
              "Latest H200 Slow Juicer marries the Easy Clean chamber set with the Self-Feeding hopper, which now has an even larger inlet that can fit whole-sized apples. Less prep and less cleaning means more time to enjoy fresh-squeezed juice."
            }
            price={699}
          ></Card>
          <Card
            picture={Juicer3}
            model={"H-AA Slow Juicer"}
            text={
              "The sleek H-AA slow juicer is our flagship model. It features the newest, most innovative technology on the market: our Alpha technology. Alpha technology sports a sleek new design, optimized juicing, easier cleaning, and the ability to make ice cream."
            }
            price={439}
          ></Card>
        </div>
        <div className="items_container">
        <button className="view_more button">View More</button>
      </div>
    </main>
  );
};

export default Main;
