import {  Outlet,NavLink } from "react-router-dom";

import './Products.css';
function Products(products){
    
    return(
        <div>
        <h1>Products</h1>
     <ul>
        {products.products.map((product)=>(
            
        <li key={product.id}><NavLink to={`/products/${product.id}`} ><div className="image"><img src={product.src} alt={product.name}/> {product.name}</div> </NavLink></li>
        ))
        }        
    </ul>  
        <Outlet context={products}/>
        </div>
         
    );
}
export default Products;