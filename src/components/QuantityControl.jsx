import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import "./QuantityControl.css";

function QuantityControl({ value, onIncrement, onDecrement }) {
  return (
    <div className="quantity-box">
      <button
        className="controller"
        type="button"
        onClick={onDecrement}
        disabled={value === 0}
      >
        <BsDashSquare className="minus" />
      </button>
      <span className="value">{value}</span>
      <button className="controller" type="button" onClick={onIncrement}>
        <BsPlusSquare className="plus" />
      </button>
    </div>
  );
}

export default QuantityControl;
