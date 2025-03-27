/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsReducer } from "../reducers/productReducers";
import {listProductDetails} from"../actions/productActions"
import { Button, Card, Col, Image, ListGroup, Row, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
//import products from "../products"
 
function ProductScreen() {

  // const { id } = useParams(); // Get product ID from the URL
  // const product = products.find((p) => p._id === id);

  // if (!product) {
  //   return <h2>Product not found</h2>;
  // }


  const { id } = useParams();
  const { product, isLoading, isError, error } = useSelector(
    (state) => state.productDetails
  );

  const [ qty, setQty] = useState(1)
  const dispatch = useDispatch();
 

  const navigate = useNavigate();
  console.log("Product details:", product);
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () =>(
    navigate(`/cart/${id}?qty=${qty}`)
  )
  return (
    <div>
   
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {isLoading ?( <Loader />
      ): isError ? (<Message variant="danger">{error}</Message>
      ) : (
      <Row>
        <Col md={6}>
          <Image style={{height: '500px', width: '500px'}} src={product.image} alt={product.name} />
        </Col>
 
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
 
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
 
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
 
            <ListGroup.Item>Descriprtion: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
 
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
 
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs="auto" className="my-1">
                      <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                        {
                          [...Array(product.countInStock).keys()].map((x) =>
                          <option key={x+1} value={x+1}>
                            {x+1}
                          </option>
                          )
                        }

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
 
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}

    </div>
  );
}
 
export default ProductScreen;