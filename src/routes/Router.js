import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/Booking";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";


function Router(){
    return <BrowserRouter>
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
}
export default Router;