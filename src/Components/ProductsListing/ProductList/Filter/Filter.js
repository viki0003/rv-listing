

import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { Checkbox } from "primereact/checkbox";
import "./filter.css";

const ProductFilter = ({ value, setValue, products = [], filters, setFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Extract unique values for filters based on available data
  const availableFilters = {
    vehicle_type: [
      ...new Set(products.map((p) => p.vehicle_type).filter(Boolean)),
    ],
    make: [...new Set(products.map((p) => p.make).filter(Boolean))],
    series: [...new Set(products.map((p) => p.series).filter(Boolean))],
   
    vehicle_year: [
      ...new Set(
        products
          .map((p) => p.vehicle_year)
          .filter((v) => v !== null && v !== undefined)
      ),
    ],
    sleeps: [...new Set(products.map((p) => p.sleeps).filter(Boolean))],
    sale_price: [
      ...new Set(
        products
          .map((p) => p.sale_price)
          .filter((v) => v !== null && v !== undefined)
      ),
    ],
    retail_price: [
      ...new Set(
        products
          .map((p) => p.retail_price)
          .filter((v) => v !== null && v !== undefined)
      ),
    ],
    weight: [
      ...new Set(
        products
          .map((p) => p.weight)
          .filter((v) => v !== null && v !== undefined)
      ),
    ],
  };

  const hasFilters =
    availableFilters.vehicle_type.length > 0 ||
    availableFilters.make.length > 0 ||
    availableFilters.series.length > 0 ||
    availableFilters.sleeps.length > 0;

 const onCategoryChange = (categoryKey, value) => {
  setSelectedCategories((prev) => {
    const currentSet = new Set(prev[categoryKey] || []);
    if (currentSet.has(value)) {
      currentSet.delete(value);
    } else {
      currentSet.add(value);
    }
    const updated = {
      ...prev,
      [categoryKey]: [...currentSet],
    };
    setFilters(updated); // Sync with parent
    return updated;
  });
};
  if (!hasFilters) {
    return (
      <div className="text-center text-gray-500 text-sm">
        No Filters at the moment
      </div>
    );
  }

  return (
    <div className="product-filter">
      <div className="pf-list">
        {/* LENGTH Range Slider */}
        <div className="pf-list-item">
          <h4>LENGTH</h4>
          <div className="pf-range-filter">
            <div className="pf-range-term">
              <span>Range</span>
              <p>
                {value[0]} - {value[1]}
              </p>
            </div>
            <Slider
              value={value}
              onChange={(e) => setValue(e.value)}
              className="w-14rem"
              range
            />
          </div>
        </div>

        {/* Render each dynamic filter section */}
        {Object.entries(availableFilters).map(([key, values]) => (
  <div className="pf-list-item" key={key}>
    <h4>{key.replace(/_/g, " ").toUpperCase()}</h4>

    {key === "vehicle_year" ? (
      <select
        className="pf-dropdown"
        value={filters[key] || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            [key]: e.target.value,
          }))
        }
      >
        <option value="">Select Year</option>
        {values.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    ) : values.length > 0 ? (
      <div className="pf-select-filter-list">
        {values.map((val) => (
          <div key={val} className="flex align-items-center">
            <Checkbox
              inputId={`${key}-${val}`}
              name={key}
              value={val}
              onChange={() => onCategoryChange(key, val)}
              checked={selectedCategories[key]?.includes(val)}
            />
            <label htmlFor={`${key}-${val}`} className="ml-2">
              {val}
            </label>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-400 text-sm">No filter here</p>
    )}
  </div>
))}
      </div>

      
    </div>
  );
};

export default ProductFilter;
