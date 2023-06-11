import './App.css'
import {useSelector,useDispatch} from "react-redux"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {Add} from "./store/slice"

export default function App() {
  const selector=useSelector((state)=>state.user.movies)
  const screens=useSelector((state)=>state.user.screens)
  const navigate=useNavigate()
  const [state,setState]=useState(false)
  const dispatch=useDispatch()
  const handleClick=(ele)=>{
    navigate("/screen")
    dispatch(Add(ele))
  }
  
  return state ? (
    <div className="box">
<h1 className='booking-title'>MOVIE BOOKING APP</h1>
    <h2 className='booking-choice' >Choose your movie:</h2>
     <div className="movie" >
    {
      selector.map((ele,i)=>{
        return <div className="movieContent" >
         
          <img className="movieImg"  src={ele.image}/>
           <div className="movieTitle">{ele.name}</div>
           <div className="movieTitle" >{ele.journal}</div>
          <div className="movieTitle">{ele.language}<br></br>
            <button style={{marginTop:"3%",padding:"4% 15%"}} className="btn btn-primary" onClick={()=>handleClick(ele.name)} > BookTickets</button>
          </div></div>
        
      })
    
    
   

     
     }
   </div>
     </div>
  )  :(
       < div className="content">
          <div className='movieBar'>
      <h1 className='iceTitle'>Welcome to the Movie World</h1>
      <img className="cinema"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVke--Z-sDuqvrxewL3225p_ApJYOZ1SVSw&usqp=CAU"/>
      <button onClick={()=>setState(true)} style={{width:"160px",fontSize:"18px",textAlign:'center',alignItem:"center",marginTop:"50px"}} class="btn btn-info">ITS MOVIE TIME </button>
            </div>
       </div>
      )
}
