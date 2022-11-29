import "./CheckoutSuccess.css";
import success from "../../../resources/images/success.svg";

const CheckoutSuccess = () => {
  return (
    <div className="message_container">
      <h1>Success! Your order is in review. Wait for further details</h1>
      <img src={success} alt="success" className="success_logo" />
    </div>
  );
};

export default CheckoutSuccess;
