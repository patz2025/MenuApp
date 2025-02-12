import React from "react"

const MenuItem = ({items}) => {
  return (
    <div className="menu-item" id={`menu-item-${items.itemId}`}>
      <span>${items.itemPrice}</span>
      <h2>{items.itemName}</h2>
      <p>{items.itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default MenuItem;