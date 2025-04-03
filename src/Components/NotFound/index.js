import React from 'react'
import NotFoundImage from "../../Assets/Images/Home/NotFound.png"
import './style.css'
export default function NotFound() {
  return (
   <>
    <div className="not-found-container">
        <img src={NotFoundImage} alt="not-found" />
        <h1>No Result Found!</h1>
    </div>
   </>
  )
}
