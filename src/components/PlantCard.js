import React from "react";

function PlantCard({ plant, onDelete, onOutOfStock }) {
  // Handle stock change (toggle inStock)
  const handleStockChange = () => {
    onOutOfStock(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      
      {/* Show In Stock button when the plant is in stock, otherwise show Out of Stock button */}
      {plant.inStock ? (
        <button className="primary" onClick={handleStockChange}>
          In Stock
        </button>
      ) : (
        <button className="secondary" onClick={handleStockChange}>
          Out of Stock
        </button>
      )}
      
      {/* Delete button */}
      <button className="delete" onClick={() => onDelete(plant.id)}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
