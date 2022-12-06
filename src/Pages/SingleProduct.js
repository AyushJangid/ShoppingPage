import React,{useEffect, useState} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const {id} = useParams();
  const [singleProd,setSingleProd] = useState([]);

    const GetSingleProduct = () => {
            // console.log(productId)
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>(
                    setSingleProd(data)
                ))
            .catch((error) => {
                console.log('error',error)
            })
    }

    useEffect(() => {
      GetSingleProduct();
      return () => {
        setSingleProd([]);  
    }
    },[])
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img src={singleProd.image} alt="image" style={{width:'80%'}}/>
        </Col>
        <Col sm={6} className="mt-5">
          <div className='text-uppercase'><h2>{singleProd.title}</h2></div>
          <p className='text-capitalize text-info'>{singleProd.category}</p>
          <p style={{fontSize:'12px', color:'#787878'}}>Description</p>
          <p>{singleProd.description}</p>
          <div className='mt-4'><h4>$ {singleProd.price}</h4></div>
          <div style={{width:'50%'}} className='addButton mt-4'>Add to Cart</div>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleProduct