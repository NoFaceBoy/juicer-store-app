import "./Preview.css";
import preview_img from "../../resources/images/preview.png";

const Preview = () => {
  return (
    <div className="preview">
      <img src={preview_img} alt="Juicer" className="preview_img" />
      <div className="preview_info">
        <h1> Enjoy your life with fresh juice. </h1>
        <p>
          This high-tech juicer makes creating your favorite beverages easier
          than ever. It out-performed all the others we tested. You’ll be hard
          “pressed” to find a more stylish option.
        </p>
      </div>
    </div>
  );
};

export default Preview;
