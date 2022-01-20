import React from "react";
import "./CartItem.css";

function CartItem({ item, buttonHandler, index }) {
  console.log("item", item);
  if (!item.product) return null;
  return (
    <div className="item">
      <div className="image">
        <img
          style={{ height: "100%" }}
          src={item.product.thumbnail.url}
          alt={item.product.name}
        />
      </div>

      <div className="description">
        <span>{item.product.name}</span>
        <span>ball High</span>
        <span>white</span>
      </div>

      <div className="quantity">
        <button
          onClick={() => buttonHandler("plus", index)}
          className="plus-btn"
          type="button"
          name="button"
        >
          +
        </button>
        <input type="text" readOnly name="name" value={item.quantity.raw} />
        <button
          onClick={() => buttonHandler("minus", index)}
          className="minus-btn"
          type="button"
          name="button"
        >
          -
        </button>
      </div>

      <div className="total-price">₩ {item.price.original.raw}</div>
      <div className="buttons">
        <span className="delete-btn">X</span>
      </div>
    </div>
  );
}

export default CartItem;
