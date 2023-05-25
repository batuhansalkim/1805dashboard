import React from 'react'
import data from "../data";
function SingleCard() {
    const {title,totalNumber,icon }= data;
  return (
    <>
    {data.map((item,index)=>(
        <div className='single__card' key={index}>
              <div className='card__content'>
                  <h4>{item.title}</h4>
                  <span>{item.totalNumber}+</span>
              </div>
              <span className='card__icon'>
                  <i className={item.icon}></i>
              </span>
          </div>
    ))}
          
    </>
    
  );
};

export default SingleCard