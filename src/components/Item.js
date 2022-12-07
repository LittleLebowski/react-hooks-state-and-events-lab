import { useState } from "react";

function Item({ name, category }) {
  const [cartItem, setCartItem] = useState(false);
  const cartClass = cartItem ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={() => setCartItem((pre) => (pre = !cartItem))}
      >
        {cartItem ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
