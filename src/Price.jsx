import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {booked} from "./store/slice"
import {useNavigate} from "react-router-dom"
const Price = () => {
  const count=useSelector((state)=>state.user.ticketCount)
  const dispatch=useDispatch()
  const TicketNumber=useSelector((state)=>state.user.ticket)
  const selector=useSelector((state)=>state.user.addingToScreen)
  const ScreenNo=useSelector((state)=>state.user.screenNumber)
  const navigate=useNavigate()
  const handleBook=()=>{
    alert("your Tickets are Booked")
    navigate("/")
    dispatch(booked())
    
  }
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",
                 alignItems:"center"
                }}>
    <h1>TICKET</h1>
    <h3 style={{marginTop:"2%",background:"gold",width:"500px",height:"30px",textAlign:"center"}}>
            MovieName:{selector}</h3>
 <div>
     
            <h3 style={{marginTop:"3%",background:"gold",width:"500px",height:"30px",textAlign:"center"}}>
            ScreenNumber:{ScreenNo}</h3>
          
      </div>
      <div>
         {
        TicketNumber.map((ele)=>{
          return <div>
            <h4 style={{marginTop:"3%",background:"lightcyan",width:"500px",height:"30px",textAlign:"center"}}>
            TicketNumber:{ele}</h4>
          </div>
        })
      }
      </div>

      <div>
        <h4 style={{marginTop:"3%",background:"lightcyan",width:"500px",height:"30px",textAlign:"center"}}>TotalTickets:{count}</h4>
        <h4 style={{marginTop:"3%",background:"pink",width:"500px",height:"30px",textAlign:"center"}}>Ticket Per Price Including Gst:130 </h4>
        <h3 style={{marginTop:"3%",background:"orange",width:"500px",height:"30px",textAlign:"center"}}>Total Amount:Rs {count*130}</h3>
        <button onClick={handleBook} style={{width:"150px",marginLeft:"175px",marginTop:"20px"}}   className="btn btn-info"> Pay Bill  </button> 
      </div>
    </div>
  )
}

export default Price