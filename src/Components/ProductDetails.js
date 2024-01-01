import {useOutletContext, useParams} from 'react-router-dom';
import './ProductDetails.css';
function ProductDetails(){
    
    const {id}=useParams();
    const products=useOutletContext();
    const currentProduct=products.products.find((product)=>product.id===parseInt(id));

    return(
        <div>
        <div className="back">
        <h1>Product Details: {currentProduct.id}</h1>
        <img src={currentProduct.src} alt={currentProduct.name} />
        <h2>Name: {currentProduct.name}</h2>
        <h2>Description: {currentProduct.description}</h2>
        <h2>Price: £{currentProduct.price}</h2>
        </div>
        </div>
    );
}
export default ProductDetails;