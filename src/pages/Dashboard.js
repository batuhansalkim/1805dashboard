import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../reuseable/SingleCard";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";
import RecommendCarsData from "../assets/dummy-data/recommendCars";


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
                    {RecommendCarsData.map(item=><RecommendCarCard item={item} key={item.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;