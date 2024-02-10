import React from 'react';

function CheckoutProducts()
{
    return(
        <div>

            <div style={{display:"block",textAlign:"center",border:"1px solid black",width:"300px",height:"450px"}}>
                <div>
                    <img style={{width:"270px",height:"250px",marginLeft:"0px"}} src="https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>


                <div>
                    <h4>Title</h4>
                    <span>Rs100</span>
                    <p>***</p>
                    <button style={{textalign:"center",cursor:"pointer"}}>Remove From Cart</button>
                </div>
            </div>

        </div>


    );
}
export default CheckoutProducts;