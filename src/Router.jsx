
import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from './App'
import Screen from './Screen'
import Price from "./Price"
import Navbar from "./Navbar"
export default function Router() {
  return (
    
     <div>
       <BrowserRouter>
        <Navbar/>
         <Routes>
           <Route path="/" element={<App/>}/>
           <Route path="/screen" element={<Screen/>}/>
           <Route path="/price"  element={<Price/>}/>
         </Routes>
       </BrowserRouter>
     </div>
  
  )
}
