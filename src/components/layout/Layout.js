import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";

function Layout(){
    return <div className="layout">
        <Sidebar/>
        <div className="amin__layout">
            <TopNav/>
        
        <div className="content">
            <Router />
        </div> 
        </div>     
    </div>
}
export default Layout;