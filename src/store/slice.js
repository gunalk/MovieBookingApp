import {createSlice} from "@reduxjs/toolkit"
const initialState={
  movies:[{
    name:"Master",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsIjz4BXky0TFjAknUMWR9EBMgsnaQnlI2Q&usqp=CAU",
    journal:"Action",
    language:"Tamil",
    id:1
  },{
    name:"KGF",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV0n04ZVlHMlDTLbjhrSzKi7NrzNL_XWLkkuMZZnZ81MgQdt7P-zZ1Sp1uxrZxw2wgHk&usqp=CAU",
    journal:"Action",
    language:"Kannada",
    id:2
  },
   {
     name:"pathaan",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_e0-WOoLbB7nzBZ9_ksjFaTrmG_VUTujbAQ&usqp=CAU",
     language:"hindi",
     journal:"Action",
     id:3
            
          },
 {
       name:"Beast",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlRb5K2rvZzmztTQdLNqHdg0M2M9aiR9m7_teZRNjIA8BWGuH-boK3UOg6ghhMc-dqcQ&usqp=CAU",
   journal:"Action",
   language:"Tamil",
   id:4
          }    
  
],

addingToScreen:[],
ticket:[],
ticketCount:0 ,
screenNumber:[]
}

export const Reducer=createSlice({
  name:'user',
  initialState,
  reducers:{
    Add:(state,action)=>{
      state.addingToScreen=action.payload
    },
    addTicket:(state,action)=>{
       let presentData=state.ticket.find((state,index)=>
        state===action.payload)
      if(presentData){
        alert("already you clicked this seat")
      }else{state.ticket.push(action.payload)}
      
    },
    addTicketCount:(state)=>{
       let data=state.ticket.length
       state.ticketCount=data;    
    },
    addScreen:(state,action)=>{
     
      state.screenNumber=action.payload
     
    },
    booked:(state,action)=>{
      state.ticket=[];
       state.ticketCount=0 
    }
    
  }
})


export const{Add,addTicket,addTicketCount,addScreen,booked}=Reducer.actions
export default Reducer.reducer