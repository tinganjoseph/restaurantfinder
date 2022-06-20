import React from 'react'
import {BrowserRouter,Routes, Route, } from "react-router-dom"
import { RestaurantsContextProvider } from './context/RestaurantContext';
import Home from './routes/Home';
import RestaurantdetailPage from './routes/RestaurantdetailPage';
import Update from './routes/Update';



const App =() => {
    return (
        <RestaurantsContextProvider>
          <div className="container"> 
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/restaurants/:id/update" element={<Update/>}/>
                    <Route path="/restaurants/:id" element={<RestaurantdetailPage/>}/>
                </Routes>
                
                </BrowserRouter>
          </div>
            
        </RestaurantsContextProvider>
    
)};

export default App;