import React from "react";
import "./vechiledetail.css";

const VehicleDetails = ({ product }) => {
  if (!product) return <p>No vehicle details available.</p>;

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Vehicle Details</h2>
        <table className="details">
          <tbody>
            <tr>
              <td>Stock</td>
              <td>{product.stock || "N/A"}</td>
              <td>VIN</td>
              <td>{product.vin || "N/A"}</td>
            </tr>
            <tr>
              <td>Miles</td>
              <td>{product.miles || "N/A"}</td>
              <td>Length</td>
              <td>{product.length ? `${product.length} ft` : "N/A"}</td>
            </tr>
            <tr>
              <td>Interior Height</td>
              <td>{product.interior_height ? `${product.interior_height} ft` : "N/A"}</td>
              <td>Height</td>
              <td>{product.height ? `${product.height} ft` : "N/A"}</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td>{product.fuel_type || "N/A"}</td>
              <td>Engine</td>
              <td>{product.engine || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        <div className="description">
          <h3>Vehicle Description</h3>
          <p>{product.description || "No description available."}</p>
          
          {product.features && product.features.length > 0 ? (
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p>No features listed.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
