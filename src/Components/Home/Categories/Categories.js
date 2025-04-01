import React, { useState } from "react";
import Class_A from "../../../Assets/Icons/ClassA";
import Class_C from "../../../Assets/Icons/ClassC";
import Fifth_Wheel from "../../../Assets/Icons/FifthWheel";
import Travel_Trailer from "../../../Assets/Icons/TravelTrailer";
import Van_Camper from "../../../Assets/Icons/VanCamper";
import "./categories.css"; // Import the CSS file

const categories_array = [
  { name: "Travel Trailer", icon: Travel_Trailer },
  { name: "Fifth Wheel", icon: Fifth_Wheel },
  { name: "Class C", icon: Class_C },
  { name: "Van Camper", icon: Van_Camper },
  { name: "Class A", icon: Class_A },
  
];

export default function Categories(){
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="category-container">
      {/* Header */}
      <div className="category-header">
        <h2>Categories</h2>
        <button onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Categories */}
      <div className={`category-list ${viewAll ? "grid-view" : "scroll-view"}`}>
        {categories_array.map(({ name, icon: Icon }, index) => (
          <div key={index} className="category-item">
            <Icon className="category-icon" />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


