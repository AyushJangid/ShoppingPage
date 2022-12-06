import React, { useState, useEffect} from 'react';
import Product from '../Components/Product';
import { Container } from 'react-bootstrap';

const ProductPage = () => {
    const [products,setProducts] = useState([]);

    

    useEffect(() => {
        
            fetch('https://fakestoreapi.com/products?limit=8')
                .then(res=>res.json())
                .then(data => {
                    setProducts(data);
                })
                .catch((error) => {                
                    console.log('error: ' + error);                
                });
        
    }, []);

  return (
    <div>
        <Container>
            <Product product={products}/>
        </Container>
    </div>
  )
}

export default ProductPage