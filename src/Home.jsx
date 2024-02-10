import React from 'react';
import Products from './Products';
import './Style/Home.css'
function Home()
{
    return(
        <div>

            <div>
                <img className="himg1" src="https://images.pexels.com/photos/5624985/pexels-photo-5624985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>

            <div className="hdiv1">

                <div className="hdiv2">
                    <div>
                        <Products
                        id={1234}
                        title={"This is 11th generation laptop"}
                        img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        rating={3}
                        price={1000}
                        />
                    </div>
                    <div>
                        <Products
                            id={1235}
                            title={"This is eight genration laptop"}
                            img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            rating={4}
                            price={2000}
                        />
                    </div>
                    <div>
                        <Products
                            id={1236}
                            title={"This is eight genration laptop"}
                            img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            rating={4}
                            price={2500}
                        />
                    </div>
                    <div>
                        <Products
                            id={1237}
                            title={"This is eight genration laptop"}
                            img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            rating={4}
                            price={2800}
                        />
                    </div>
                </div>

                <div className="hdiv2">
                    <div>
                        <Products
                        id={1238}
                        title={"This is eight genration laptop"}
                        img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        rating={4}
                        price={3000}
                        />
                    </div>
                    <div>
                        <Products
                        id={1239}
                        title={"This is eight genration laptop"}
                        img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        rating={3}
                        price={3500}
                        />
                    </div>
                    <div>
                        <Products
                        id={1240}
                        title={"This is eight genration laptop"}
                        img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        rating={4}
                        price={4000}
                        />
                    </div>
                    <div>
                        <Products
                        id={1241}
                        title={"This is eight genration laptop"}
                        img={"https://images.pexels.com/photos/4884118/pexels-photo-4884118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        rating={2}
                        price={4500}
                        />
                    </div>
                </div>
                
               

            </div>
        </div>
        

        
        
    );
}
export default Home;