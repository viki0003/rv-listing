import React from 'react';
import './style.css';
const Loader = () => {
  return (
    <div className="loader">
  <div className="avatar"></div>
  <div className="text">
    <div className="line short"></div>
    <div className="line long"></div>
  </div>
</div>

  );
}

export default Loader;
