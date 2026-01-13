import QuantityControl from "./QuantityControl";
import CardTag from "./CardTag";
import { RiFireFill } from "react-icons/ri";
import "./Card.css";

const SPICE_MAP = {
  Mild: 1,
  Medium: 2,
  Hot: 3,
  Spicy: 4,
  Fiery: 5,
};

const SPICE_LABELS = {
  1: "Mild",
  2: "Medium",
  3: "Hot",
  4: "Spicy",
  5: "Fiery",
};

function Card(props) {
  const {
    id,
    title,
    subtitle,
    price,
    description,
    spiceLevel,
    mediaSrc,
    mediaAlt,
    isChefSignature,
    isSeasonal,
    variant,
    quantity = 0,
    onQuantityChange,
    onCardClick,
    onFeatureClick,
    ...rest
  } = props;

  const handleCardClick =
    variant === "menu" ? () => onCardClick?.(id) : onFeatureClick;
  const showRole = variant === "team";
  const showCardPrice = variant !== "compact" && variant !== "team";
  const showDescription = variant !== "compact" && variant !== "team";
  const canShowQuantityControl =
    variant === "menu" &&
    typeof onQuantityChange === "function" &&
    quantity > 0;

  const normalizedSpice =
    typeof spiceLevel === "string" ? spiceLevel.trim() : spiceLevel;

  const spiceCount =
    typeof normalizedSpice === "number"
      ? normalizedSpice
      : SPICE_MAP[normalizedSpice] ?? 0;

  const spiceLabel =
    typeof normalizedSpice === "string"
      ? normalizedSpice
      : SPICE_LABELS[normalizedSpice] ?? null;

  const spiceIcons = Array.from({ length: spiceCount });

  const tag = isChefSignature
    ? { text: "Chef's Signature", variant: "chef" }
    : isSeasonal
    ? { text: "Seasonal Dish", variant: "seasonal" }
    : null;

  const handleIncrement = () => onQuantityChange(id, quantity + 1);
  const handleDecrement = () => onQuantityChange(id, Math.max(quantity - 1, 0));

  return (
    <>
      <button
        type="button"
        className="card"
        onClick={handleCardClick}
        {...rest}
      >
        <div className={`card-container card-${variant ?? "default"}`}>
          {/*Card Image*/}
          <div className="card-img">
            <img src={mediaSrc} alt={mediaAlt} />
            {tag && <CardTag text={tag.text} variant={tag.variant} />}
          </div>

          {/*Card Content*/}
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">{title}</h3>
              {showCardPrice && <span className="card-price">{price}</span>}
            </div>

            {showRole && <span className="card-subtitle">{subtitle}</span>}

            {spiceCount > 0 && (
              <div className="spice-level">
                <span className="spice-icons">
                  {spiceIcons.map((_, i) => (
                    <RiFireFill key={i} />
                  ))}
                </span>

                {/* If spiceLevel is a string like "Medium", show it. If it’s a number, show nothing or a lookup */}
                {spiceLabel && <CardTag text={spiceLabel} variant="spice" />}
              </div>
            )}

            {/*Card Description*/}
            {showDescription && (
              <p className="card-description">{description}</p>
            )}

            {/*Card Actions*/}
            {canShowQuantityControl && (
              <div
                className="card-actions"
                onClick={(e) => e.stopPropagation()}
              >
                <QuantityControl
                  value={quantity}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
              </div>
            )}
          </div>
        </div>
      </button>
    </>
  );
}

export default Card;
