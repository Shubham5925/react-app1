import React from 'react';
import './Style/Checkout.css';
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';

function Checkout()
{
    const [{basket},dispatch]=useStateValue();
    return (
        <div>
            <div className="cdiv1">

                <img className="cimg1" src="https://images.pexels.com/photos/10330112/pexels-photo-10330112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                <h2 style={{marginLeft:"10px",border:"1px solid black",width:"380px",height:"550px"}}>
                    <Subtotal/>
                </h2>
            </div>

            <div><h3 style={{textAlign:"center"}}>Your Shopping Cart</h3></div>
            {
                basket.map(item=>(
                  <CheckoutProducts/>  
                ))
            }

            <div style={{display:"flex"}}>

                <div><CheckoutProducts/></div>
                <div><CheckoutProducts/></div>
                <div><CheckoutProducts/></div>
                <div><CheckoutProducts/></div>

            </div>
            
           
                
        </div>

        
    );

}
export default Checkout;