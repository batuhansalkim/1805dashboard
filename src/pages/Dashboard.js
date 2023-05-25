import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../reuseable/SingleCard";
import MileChart from "../charts/MileChart";
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <SingleCard />
                </div>
                <div className="statics">
                    <div className="stats">
                        <h3 className="stats__title">Miles Statics</h3>
                        <MileChart/>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}

export default Dashboard;