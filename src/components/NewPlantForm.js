import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPlant = {
      name: plantName,
      image: plantImage,
      price: parseFloat(plantPrice),
    };

    onAddPlant(newPlant);

    // Reset the form
    setPlantName("");
    setPlantImage("");
    setPlantPrice("");
  };

  return (
    <div className="new-plant-form">
      <h2>Add a New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
          placeholder="Plant name"
          required
        />
        <input
          type="text"
          value={plantImage}
          onChange={(e) => setPlantImage(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          value={plantPrice}
          onChange={(e) => setPlantPrice(e.target.value)}
          placeholder="Price"
          step="0.01"
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
