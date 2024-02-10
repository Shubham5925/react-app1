import React from 'react';

function Subtotal()
{
    return(
        <div>
            <p>Subtotal (0 items):Rs.0</p>
            <input type="checkbox"/>this order contains gift
            <button style={{textAlign:"center",fontSize:"15px",display:"block",marginLeft:"70px",cursor:"pointer"}}>Proceed to checkout</button>
        </div>


    );
}
export default Subtotal;