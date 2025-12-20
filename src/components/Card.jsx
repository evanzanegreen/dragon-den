import QuantityControl from "./QuantityControl";
import CardTag from "./CardTag";
import Button from "./Button";
import { RiFireFill } from "react-icons/ri";
import "./Card.css";

const SPICE_MAP = {
  Mild: 1,
  Medium: 2,
  Hot: 3,
  Spicy: 4,
  Fiery: 5,
};

function Card({
  id,
  variant = "default",
  cardMediaSrc,
  cardMediaAlt = "Card Image",
  cardTitle,
  cardSubtitle,
  cardPrice,
  spiceLevel,
  cardDescription,
  isChefSignature = false,
  isSeasonal = false,
  quantity,
  onQuantityChange,
  onAddToCart,
}) {
  const showRole = variant === "team";
  const showCardPrice = variant !== "compact" && variant !== "team";
  const showDescription = variant !== "compact" && variant !== "team";
  const canShowActions =
    variant === "menu" &&
    typeof onQuantityChange === "function" &&
    typeof onAddToCart === "function";
  const spiceCount = SPICE_MAP[spiceLevel] ?? 0;
  const spiceIcons = Array.from({ length: spiceCount });

  const tag = isChefSignature
    ? { text: "Chef's Signature", variant: "chef" }
    : isSeasonal
    ? { text: "Seasonal Dish", variant: "seasonal" }
    : null;

  const handleIncrement = () => onQuantityChange(id, quantity + 1);
  const handleDecrement = () => onQuantityChange(id, Math.max(quantity - 1, 0));

  return (
    <div className="card-container">
      {/*Card Image*/}
      <div className="card-img">
        <img src={cardMediaSrc} alt={cardMediaAlt} />
        {tag && <CardTag text={tag.text} variant={tag.variant} />}
      </div>

      {/*Card Content*/}
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{cardTitle}</h3>
          {showRole && <span className="card-subtitle">{cardSubtitle}</span>}
          {showCardPrice && <span className="card-price">{cardPrice}</span>}
        </div>

        {spiceLevel && (
          <div className="spice-level">
            <span className="spice-icons">
              {spiceIcons.map((_, i) => (
                <RiFireFill key={i} />
              ))}
            </span>
            <CardTag text={spiceLevel.replace("-", "")} variant="spice" />
          </div>
        )}

        {/*Card Description*/}
        {showDescription && (
          <p className="card-description">{cardDescription}</p>
        )}

        {/*Card Actions*/}
        {canShowActions && (
          <div className="card-actions">
            <QuantityControl
              value={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <Button
              size="md"
              variant="primary"
              onClick={() => onAddToCart(id, quantity)}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
