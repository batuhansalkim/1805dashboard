import React from 'react'
import carData from "../../assets/dummy-data/booking-cars";
function CarItem() {

    return(
        <>
        {carData.map((item,index)=>(
            <div className="car__item" key={index}>
                
                <div className="car__item-top">
                    <div className="car__item-title">
                        <h3>{item.carName}</h3>
                        <span><i className="ri-heart-line"></i></span>
                    </div>
                    <p>{item.category}</p>
                </div>

                <div className="car__img">
                    <img src={item.imgUrl} alt={item.carName} />
                </div>
                <div className="car__item-bottom">
                    <div className="car__bottom-left">
                        <p><i className="ri-user-line"></i>{item.groupSize}</p>
                        <p><i className="ri-repeat-line"></i>Manual</p>
                    </div>
                    <p className='car__rent'>${item.rentPrice}/d</p>
                </div>
            </div>
        ))}
            {/* <div className="car__item">
                

                <div className="car__item-bottom">
                    <div className="car__bottom-left">
                        <p><i className="ri-user-line"></i>4</p>
                        <p><i className="ri-repeat-line"></i>Manual</p>
                    </div>
                    <p className="car__rent">$29/d</p>
                </div>
            </div> */}
        </>
    
    
)}

export default CarItem