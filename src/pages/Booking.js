import React from "react";
import "../styles/bookings.css";
import carImg from "../assets/images/car-01.png";
function Booking(){
    return(
        <div className="bookings">
            <div className="booking__wrapper">
                <h2 className="booking__title">Booking</h2>
                <div className="filter__widget-wrapper">
                    <div className="filter__widget-01">
                        <select>
                            <option value="New">New</option>
                            <option value="Popular">Popular</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                    </div>

                    <div className="filter__widget-02">
                        <select>
                            <option value="toyota">Toyota</option>
                            <option value="bmw">Bmw</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div> 
                </div>

                <div className="booking__car-list">
                    <div className="car__item">
                        <div className="car__item-top">
                            <div className="car__item-title">
                                <h3>Nissan</h3>
                                <span><i className="ri-heart-line"></i></span>
                            </div>
                            <p>Category</p>
                        </div>
                        <div className="car__img">
                            <img src={carImg} alt="" />
                        </div>

                        <div className="car__item-bottom">
                            <div className="car__bottom-left">
                                <p><i className="ri-user-line"></i>4</p>
                                <p><i className="ri-repeat-line"></i>Manual</p>
                            </div>
                            <p className="car__rent">$29/d</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;