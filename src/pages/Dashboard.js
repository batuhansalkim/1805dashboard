import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../reuseable/SingleCard";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import image1 from "../assets/images/mini-car-01.png";
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <SingleCard />
                </div>
                <div className="statics">
                    <div className="stats">
                        <h3 className="stats__title">Miles Statistics</h3>
                        <MileChart/>
                    </div>

                    <div className="stats">
                        <h3 className="stats__title">Car Statistics</h3>
                        <CarStatsChart />
                    </div>
                </div>


                <div className="recommed__cars-wrapper">
                    <div className="recommend__car-card">

                        <div className="recomend__car-top">
                            <h5><span><i className="ri-refresh-line"></i></span>74% Recommended</h5>
                        </div>


                        <div className="recommend__car-img">
                            <img src={image1} alt="" />
                        </div>


                        <div className="reccomend__car-bottom">
                            <h4>Minni Cooper</h4>
                            
                            <div className="recommend__car-other">
                                <div>
                                    <p><span><i className="ri-repeat-line"></i></span>130k</p>

                                    <p><span><i className="ri-timer-flash-line"></i></span>130k</p>
                                </div>
                                <span>$30/h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;