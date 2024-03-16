import React from 'react'
import { Link } from 'react-router-dom'

function HomeComponent() {
  return (
    <div>
      HomeComponent <br />

      <Link to={"/booking"}>
        <button style={{padding: "10px", backgroundColor: "green"}}>Book Now</button>
      </Link>
    </div>
  )
}

export default HomeComponent
