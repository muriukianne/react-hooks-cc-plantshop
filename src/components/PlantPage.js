import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // used useState to store the array of plants that were fetched from db.json
  const [plants, setPlants] = useState([]);
  //stored the search query input 
  const [searchQuery, setSearchQuery] = useState("");
  // filtered the plants to return a new array depending on the search query 
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  // fetched data from the db.json server
  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-nlsl.onrender.com//plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // created a function to add a new plant
  const addPlant = (newPlant) => {
    fetch("https://react-hooks-cc-plantshop-nlsl.onrender.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        setPlants((prevPlants) => [...prevPlants, addedPlant]); 
      });
  };

  return (
    <main>
      {/* the newPlantForm takes in  the funstion addplant to add a new plant */}
      <NewPlantForm addPlant={addPlant}/>
      {/* search component takes the function setSearchQuery to udate the query */}
      <Search onSearch={setSearchQuery}/>
      {/* plantlist componenet passes fitered list as a prop */}
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;


