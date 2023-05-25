import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../reuseable/SingleCard";
import {ResponsiveContainer,BarChart,Bar,XAxis,Tooltip} from "recharts";
import mileStaticData from "../assets/dummy-data/mileStatics";
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <SingleCard />
                </div>
                <div className="statics">
                    <div className="stats">
                        <ResponsiveContainer width="100%" aspect= {4/ 1}>
                            <BarChart data={mileStaticData}>

                                <XAxis dataKey="name" stroke="#2884ff"/>

                                <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff"/>

                                <Tooltip/>
                                
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="stats">
                        <ResponsiveContainer width="100%" aspect={4 / 1}>
                            <BarChart data={mileStaticData}>

                                <XAxis dataKey="name" stroke="#2884ff" />

                                <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff" />

                                <Tooltip />

                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;