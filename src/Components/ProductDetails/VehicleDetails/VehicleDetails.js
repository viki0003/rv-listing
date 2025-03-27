import React from "react";
import "./vechiledetail.css";
const VehicleDetails = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h2>Vehicle Details</h2>
          <table className="details">
            <tbody>
              <tr>
                <td>Stock</td>
                <td>WRV112</td>
                <td>VIN</td>
                <td>W1W4NBVY9RP630303</td>
              </tr>
              <tr>
                <td>Miles</td>
                <td>1.99l</td>
                <td>Length</td>
                <td>19.5 ft</td>
              </tr>
              <tr>
                <td>Interior Height</td>
                <td>6.25 ft</td>
                <td>Height</td>
                <td>9.92 ft</td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td>Diesel</td>
                <td>Engine</td>
                <td>Mercedes-Benz/14</td>
              </tr>
            </tbody>
          </table>
          <div className="description">
            <h3>Vehicle description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu donec vitae ipsum
              facilisi mauris non et.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet
              </li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis sed amet dolor a
              praesent. Dolor maecenas nunc hac nulla vitae convallis. Ornare
              sed ullamcorper feugiat etiam consequat rhoncus mauris.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis sed amet dolor a
              praesent. Dolor maecenas nunc hac nulla vitae convallis. Ornare
              sed ullamcorper feugiat etiam consequat rhoncus mauris.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
