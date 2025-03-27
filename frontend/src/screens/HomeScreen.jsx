import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
//import products from "../products";
 
function HomeScreen() {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(listProducts())
 
  }, [])

  return (
    <div>
      <h1>Latest products</h1>
      {isLoading && <Loader />}
      {isError && <Message varient="danger">{error}</Message>}
 
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
 
export default HomeScreen;