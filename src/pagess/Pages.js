import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router,Switch,Route, Routes} from "react-router-dom";
  

const Pages = () => {
  return( 
  <>
  
   <Router>
     <Navbar/>
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          
        </Routes>
      
    </Router>
   </>
  )
}

export default Pages
