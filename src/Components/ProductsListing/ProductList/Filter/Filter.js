import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { Checkbox } from "primereact/checkbox";
import './filter.css'

const ProductFilter = () => {
  const filterList = [
    { name: "Lorem", key: "A" },
    { name: "Lorem", key: "M" },
    { name: "Sit", key: "P" },
    { name: "Lorem", key: "R" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([filterList[1]]);
  const [value, setValue] = useState([20, 80]);
  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };
  return (
    <div className="product-filter">
      <div className="pf-list">
        <div className="pf-list-item">
          <h4>PRICES</h4>
          <div className="pf-range-filter">
            <div className="pf-range-term">
              <span>Range</span>
              <p>$120 - $300</p>
            </div>
            <Slider
              value={value}
              onChange={(e) => setValue(e.value)}
              className="w-14rem"
              range
            />
          </div>
        </div>

        <div className="pf-list-item">
          <h4>Filters</h4>
          <div className="pf-select-filter-list">
            {filterList.map((category) => {
              return (
                <div key={category.key} className="flex align-items-center">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                  />
                  <label htmlFor={category.key} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pf-list-item">
          <h4>Brands</h4>
          <div className="pf-select-filter-list">
            {filterList.map((category) => {
              return (
                <div key={category.key} className="flex align-items-center">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                  />
                  <label htmlFor={category.key} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pf-list-item">
          <h4>Categories</h4>
          <div className="pf-select-filter-list">
            {filterList.map((category) => {
              return (
                <div key={category.key} className="flex align-items-center">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                  />
                  <label htmlFor={category.key} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pf-list-item">
          <h4>Size</h4>
          <div className="pf-select-filter-list">
            {filterList.map((category) => {
              return (
                <div key={category.key} className="flex align-items-center">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                  />
                  <label htmlFor={category.key} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
