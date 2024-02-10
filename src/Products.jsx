import React from 'react';
import './Style/Products.css';
import {useStateValue} from './StateProvider';

function Products({id,title,img,rating,price})
{
    const[state,dispatch]=useStateValue();
    function addProduct()
    {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                img:img,
                rating:rating,
                price:price
            }
        })
    }



    return(
       <div>
            <div className="pdiv1">

                <div className="pdiv2">
                    <p>{title}</p>
                    <strong>Rs.{price}</strong>
                    <p>
                        {Array(rating).map((_,i)=>(
                            <span>*</span>

                        ))}
                    </p>
                    <div className="pdiv3">

                        <div><img style={{height:"200px",width:"200px"}} src={img} /></div>
                        
                        <div><button onClick={addProduct} style={{marginLeft:"75px", width:"160px", height:"35px", fontSize:"23px", backgroundColor:"yellow", color:"black",cursor:"pointer",borderRadius:"5px",button:"warning"}} >Add To Cart</button></div>
                    </div>

                </div>

            </div>
       
       </div>     


    );
}
export default Products;
