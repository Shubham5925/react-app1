import React from 'react';
import './Style/Header.css';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';


function Header()
{
    const [{basket},dispatch]=useStateValue();
    return (
        
            <div>
                <div className="div2">
                    <div className="div3">
                        <Link to="/"><img className="img1" src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"/></Link>
                    </div>

                    <div className="div4">
                        
                            <input type="text" className="input1" placeholder="Search...."/>
                            <img className="img2" src="https://cdn.pixabay.com/photo/2014/05/18/18/25/icon-347230_1280.png" />
                        
                    </div>

                    <div className="div5">
                        Hello 
                        <div><strong>Guest</strong>
                    </div></div>
                    <div className="div6">
                        Your 
                        <div><strong>Shop</strong></div>

                       
                    </div>
                    <div>
                        <Link to='/checkout'> 
                            <p>Go To Cart</p>
                            <span>{basket.length}</span>
                        </Link>
                        
                    </div>

                    
                </div>
            </div>
        
    );
}
export default Header;