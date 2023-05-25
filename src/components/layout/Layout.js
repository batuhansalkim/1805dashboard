import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import Dashboard from "../../pages/Dashboard";

function Layout(){
    return <div className="layout">
        <Sidebar/>
        <div className="main__layout">
            <TopNav/>
            <Dashboard/>
        <div className="content">
            <Router />
        </div> 
        </div>     
    </div>
}
export default Layout;