import "./Cart.css";
import Button from "./Button";
import QuantityControl from "./QuantityControl";
import { IoClose } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

function CartOverlay({ children }) {
  return <section className="cart-overlay">{children}</section>;
}

function CartPanel({ children }) {
  return (
    <section className="section-cart cart-panel">
      <div className="container-cart">{children}</div>
    </section>
  );
}

function Cart({
  isOpen,
  onClose,
  itemQuantities,
  menuData,
  onRemoveItem,
  onQuantityChange,
}) {
  // =========================
  // DERIVED VALUES (READ-ONLY)
  // =========================

  const itemsInCart = Object.keys(itemQuantities ?? {});

  const cartRows = itemsInCart
    .map((id) => {
      const item = menuData.find((m) => m.id === id);
      if (!item) return null;

      const qty = itemQuantities[id] || 0;
      const lineTotal = item.price * qty;

      return { id, item, qty, lineTotal };
    })
    .filter(Boolean);

  const subtotal = cartRows.reduce((sum, row) => {
    return sum + row.lineTotal;
  }, 0);

  //Close Cart
  if (!isOpen) return null;

  // Empty cart (or nothing renderable)
  if (cartRows.length === 0) {
    return (
      <CartOverlay>
        <CartPanel>
          <div className="container-cart">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<IoClose />}
              aria-label="Close cart"
              onClick={onClose}
              className="close-icon"
            />

            <h2>Cart</h2>
            <div className="cart-items-empty">
              <p>Let&apos;s fill your plate.</p>
            </div>
            <Button
              className="order"
              disabled={cartRows.length === 0}
              aria-disabled={cartRows.length === 0}
            >
              ORDER
            </Button>
          </div>
        </CartPanel>
      </CartOverlay>
    );
  }

  const TAX_RATE = 0.06; //Sales tax is 6%
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <CartOverlay>
      <CartPanel>
        <div>
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<IoClose />}
            aria-label="Close cart"
            onClick={onClose}
            className="close-icon"
          />

          <h2>Cart</h2>

          <div className="cart-items">
            {cartRows.map((row) => (
              <div key={row.id} className="line-item">
                <p>
                  {row.item.title} ({row.qty}):{" "}
                  <strong>${row.lineTotal.toFixed(2)}</strong>
                </p>

                <div className="actions">
                  <div className="quantity-controller">
                    <QuantityControl
                      value={row.qty}
                      onIncrement={() => onQuantityChange(row.id, row.qty + 1)}
                      onDecrement={() =>
                        onQuantityChange(row.id, Math.max(row.qty - 1, 0))
                      }
                    />
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<LuTrash2 />}
                    aria-label={`Remove ${row.item.title}`}
                    onClick={() => onRemoveItem(row.id)}
                    className="icon-only"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <p className="before-tax">
              <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
            </p>
            <p className="final-cost">
              <strong>Total: ${total.toFixed(2)}</strong>
            </p>
          </div>

          <Button className="order">ORDER</Button>
        </div>
      </CartPanel>
    </CartOverlay>
  );
}

export default Cart;
