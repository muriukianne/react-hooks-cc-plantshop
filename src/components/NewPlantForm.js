import React, {useState} from "react";

// created a function and put addplant as a prop
function NewPlantForm({addPlant}) {
  // declared variables to store input values
 const [name, setName] =  useState ("")
 const [image, setImage] =  useState ("")
 const [price, setPrice] =  useState ("")

//  used preventdefault to prevent page reloading
 const handleSubmitButton = (event) => {
    event.preventDefault();
// created a new plant object with current input values
    const newPlant = {name, image, price };
// called the add plant function
    addPlant(newPlant)

    setName("");
    setImage("");
    setPrice("");

 }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* created form to input new plant */}
      <form onSubmit={handleSubmitButton}>
      <input
         type="text"
         name="name"
         placeholder="Plant name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
      />
			<br></br>
      <input
         type="text"
         name="image"
         placeholder="Image URL"
         value={image}
         onChange={(e) => setImage(e.target.value)}
         required
      />
			<br></br>
      <input
         type="number"
         name="price"
         placeholder="Price"
         value={price}
         onChange={(e) => setPrice(e.target.value)}
         required
      />
			<br></br>
      {/* created a submit button to add a new plant */}
      <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
