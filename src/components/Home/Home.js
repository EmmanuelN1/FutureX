import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Home.css";
import Product from "../Product/Product"

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
             const request =  await axios.get('https://fakestoreapi.com/products/');
                 setProducts(request.data); 
                 console.log(request.data);
             return request;
        }

        fetchData();
     }, []);

    

    return (
        <div className="home">
            <div className="home__container">
               <div className="home__row">
                        {products.map((item) => (
                                            <Product
                                                id= {item.id}
                                                title = {item.title}
                                                image = {item.image}
                                                price = {item.price}
                                            />
                                        ))}
                            
                </div>
                  
            </div>

        </div>
    
    )
}

export default Home;





