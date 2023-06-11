import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addTicket,addTicketCount,addScreen} from "./store/slice"
import { useNavigate } from 'react-router-dom'
import "./Screen.css"
const Screen = () => {
  const selector=useSelector((state)=>state.user.addingToScreen)
  const [state,setState]=useState("screen1")
  const navigate=useNavigate()
  const [color,setColor]=useState(true)
  const [color1,setColor1]=useState(true)
  const [color2,setColor2]=useState(true)
  const [color3,setColor3]=useState(true)
  const [color4,setColor4]=useState(true)
  const [color5,setColor5]=useState(true)
  const [color6,setColor6]=useState(true)
  const [color7,setColor7]=useState(true)
  const [color8,setColor8]=useState(true)
  const [color9,setColor9]=useState(true)
  const [color10,setColor10]=useState(true)
  const [color11,setColor11]=useState(true)
  const [color12,setColor12]=useState(true)
  const [color13,setColor13]=useState(true)
  const [color14,setColor14]=useState(true)
  const count=useSelector((state)=>state.user.ticketCount)
  const dispatch=useDispatch()
  const handleClick=(ele)=>{
   setColor(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick1=(ele)=>{
   setColor1(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick2=(ele)=>{
   setColor2(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
const handleClick3=(ele)=>{
   setColor3(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }


  const handleClick4=(ele)=>{
   setColor4(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }

  const handleClick5=(ele)=>{
   setColor5(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }


  const handleClick6=(ele)=>{
   setColor6(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }

  const handleClick7=(ele)=>{
   setColor7(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }

  const handleClick8=(ele)=>{
   setColor8(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick9=(ele)=>{
   setColor9(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick10=(ele)=>{
   setColor10(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick11=(ele)=>{
   setColor11(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick12=(ele)=>{
   setColor12(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleClick13=(ele)=>{
   setColor13(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  
const handleClick14=(ele)=>{
   setColor14(false)
    dispatch(addTicket(ele))
    dispatch(addTicketCount())
  }
  const handleChange=(event)=>{
    setState(event.target.value)
  }
  
const handleSave=()=>{
  if(count==0){
    alert("please select the tickets")
  }
  else{
  navigate("/price")
  dispatch(addScreen(state))
  }
}

  
  return (
    <div className="screen" >
      <div className="screen-box">
      
    <h3 style={{marginTop:"10%",background:"gold",width:"100%"}}>{selector}</h3>
    
            <h3 style={{marginTop:"5%",background:"gold",width:"100%"}}> Select Your Screen</h3>
      <select onChange={handleChange} value={state}  className="form-control" name="screen" >
  <option value="Screen1">Screen1</option>
  <option value="Screen2">Screen2</option>
  <option value="Screen3">Screen3</option>
  <option value="Screen4">Screen4</option>
        
</select>
                       <h3 style={{marginTop:"15%",background:"gold"}}>Select your Ticket:</h3>
            <div  style={{display:"flex",justifyContent:"space-evenly",color:"white"}}>
              <button style={{background:color ? ("grey"):("blue")}} onClick={()=>handleClick(1)}>1</button>
              <button style={{background:color1 ? ("grey"):("blue") }} onClick={()=>handleClick1(2)}>2</button>
              <button style={{background:color2 ? ("grey"):("blue") }} onClick={()=>handleClick2(3)}>3</button>
              <button style={{background:color3 ? ("grey"):("blue") }} onClick={()=>handleClick3(4)}>4</button>
              <button style={{background:color4 ? ("grey"):("blue") }} onClick={()=>handleClick4(5)}>5</button>
              <button style={{background:color5 ? ("grey"):("blue") }} onClick={()=>handleClick5(6)}>6</button>
              <button style={{background:color6 ? ("grey"):("blue") }} onClick={()=>handleClick6(7)}>7</button>
              <button style={{background:color7 ? ("grey"):("blue") }} onClick={()=>handleClick7(8)}>8</button>
              <button style={{background:color8 ? ("grey"):("blue") }} onClick={()=>handleClick8(9)}>9</button>
              
              <button style={{background:color9 ? ("grey"):("blue") }} onClick={()=>handleClick9(10)}>10</button>
              <button style={{background:color10 ? ("grey"):("blue") }} onClick={()=>handleClick10(11)}>11</button>
              <button style={{background:color11 ? ("grey"):("blue") }} onClick={()=>handleClick11(12)} >12</button>
              <button style={{background:color12 ? ("grey"):("blue") }} onClick={()=>handleClick12(13)}>13</button>
              <button style={{background:color13 ? ("grey"):("blue") }} onClick={()=>handleClick13(14)}>14</button>
              <button style={{background:color14 ? ("grey"):("blue") }} onClick={()=>handleClick14(15)}>15</button>
              
              
              
              
              
            </div>
    
    <button onClick={handleSave} style={{marginTop:"15%",width:"100%"}} className="btn btn-primary">Pay the Amount</button>
         </div>
    </div>
  )
}

export default Screen