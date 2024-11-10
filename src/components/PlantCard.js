
import React, { useState} from "react";

function PlantCard({ plant, updatePlant, deletePlant }) {
  // used state to manage whether plant is in stock or sold out
  const [inStock, setInStock] = useState(true); 
  // used state to manage the updated price
  const [newPrices, setNewPrices] = useState(plant.price); 
  // dynamically set the button to green
  const color = newPrices ? "green" : "grey"


  //created a function to handle the changes in price input field 
  function handlePriceChange(e) {
  // update the new price changes
    setNewPrices(e.target.value);
  }

  // created a function to handle the price changes when the updateprice button is clicked
  function handlePriceUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      // send the updated price to the json server
      body: JSON.stringify({
        price: newPrices,
      }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        updatePlant(updatedPlant);
      });
  }

  // created a function to switch the status of the instock and out of stock
  function toggleInStock() {
    const updatedStatus = !inStock;
    setInStock(updatedStatus);

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        soldOut: updatedStatus, 
      }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        updatePlant(updatedPlant); 
      });
  }
  // created a function to enable the deleting of a plant
  function handleDelete() {
    // make a delete request to the db.json
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => deletePlant(plant.id));
  }
  

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
       {/* to display the updated price */}
      <p>Price: ${newPrices}</p>
       {/* butoon to switch instock and out of stock status */}
      <button className="primary" onClick={toggleInStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      {/* created an input to change the price of theplant */}
      <input
        type="number"
        value={newPrices}
        onChange={handlePriceChange}
        placeholder="Enter new price"
      />
      {/* Button to update the price of the plant */}
      <button className="btn" style={{background : color}} onClick={handlePriceUpdate}>
        Update Price
      </button>
      <br></br>
      {/* Button to delete the plant */}
      <button className="btn btn-danger" onClick={handleDelete}>
      Delete Plant
      </button>

    </li>
  );
}

export default PlantCard;

