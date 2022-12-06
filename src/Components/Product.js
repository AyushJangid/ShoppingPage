import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({product}) => {

    
  return (
    <Row>
        {product.map(item => {
            return (
            <Col sm={3} className="mb-4"> 
                <div  style={{border:'1px solid #d7d7d7', padding:'10px'}}>               
                    <div className='d-flex align-items-center' style={{minHeight:'450px'}}>
                        <img src={item.image} alt="image" style={{width:'100%'}}/>
                    </div>
                    <div className='mb-3 productTitle'><h5>{item.title}</h5></div>
                    
                    <div><h4>${item.price}</h4></div>
                    
                    <div className='d-flex justify-content-between flex-direction-row mb-3' style={{color:'#838383', fontSize:'12px'}}>
                        
                        <div>Reviews : {item.rating.count}</div>
                        <div>Rating : {item.rating.rate} of 5</div>
                    </div>
                    <Link to={`/single-product/${item.id}`} className="addButton">
                       Go to Product
                    </Link>
                </div>
            </Col>
            )
        })}
    
    </Row>
  )
}

export default Product


