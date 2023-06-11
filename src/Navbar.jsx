import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="navbarGradient" style={{ display:"flex",height:"50px",justifyContent:"space-evenly",color:"steelblue",width:"100%",flexWrap:"wrap",alignContent:"center"}}>
      <h3 onClick={()=>navigate("/")}>HOME</h3>
     
    </div>
  )
}

export default Navbar