import React from "react";

function PlantList({ plants, deletePlant,InStock }) {
  return (
    <div>
      <h1>WELCOME TO PLANTSY!</h1>
      {plants.length === 0 ? (
        <p>No plants available at the moment.</p>
      ) : (
        <ul className="cards">
          {plants.map((plant) => (
            <li key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <h4>${plant.price}</h4>
              <button onClick={() => InStock(plant.id)}>In Stock</button>
              <button onClick={() => deletePlant(plant.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlantList;
