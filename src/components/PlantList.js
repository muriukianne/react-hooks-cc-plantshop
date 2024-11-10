import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">
      {/* used && to ensure that the plants array exist before rendering them */}
      {/* used map to iterate through the array of objects to give us a single object */}
    {plants && plants.map((plant) => (
      // rendered the plant card and passed plant as a prop
      // passed a unique key
        <PlantCard key={plant.id} plant={plant} />
      ))}
  </ul>
     );
}

export default PlantList;
