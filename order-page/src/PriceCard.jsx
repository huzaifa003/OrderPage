
import React, { useState } from 'react'

const PriceCard = (props) => {
  
    return (
        <> 
                <div className="sold">
                    <p>Last Sold:<span>{props.lastSold}s ago</span>
                    </p>
                </div>
                <div className="productSelect ">
                  {/* selected */}
                    <p className={`name  `}>{props.days+" " }{ props.type+" "}Pass</p>
                </div>
                {/* selected */}
                <p className={`price `}>{props.price}<span>{props.currency}</span></p>
                {/* selected */}
                <p className={` billingcycle `}>per {props.billingCycle}</p>
                <div className="save ">
                    <p>Save {props.saving}%</p></div>
              {/* selected */}
                <p className={` guarantee `}>7-day money-back guarantee
                </p>
           
           
       
           
        </>
    )
}

export default PriceCard
