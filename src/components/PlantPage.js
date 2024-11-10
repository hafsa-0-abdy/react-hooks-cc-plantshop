import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // For deleting
  const handleDeletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };


  const handleOutOfStock = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  };

  // Add new plant to list
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Changes search input
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Filter plants based on what you search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList
        plants={filteredPlants}
        deletePlant={handleDeletePlant}
        outOfStock={handleOutOfStock}
      />
    </main>
  );
}

export default PlantPage;
