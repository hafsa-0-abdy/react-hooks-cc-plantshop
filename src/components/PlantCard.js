import React from "react";

function PlantCard({ plant, onDelete, onOutOfStock }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.inStock ? (
        <button className="primary" onClick={() => onOutOfStock(plant.id)}>
          In Stock
        </button>
      ) : (
        <button>Out Of Stock</button>
      )}
      <button className="delete" onClick={() => onDelete(plant.id)}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
