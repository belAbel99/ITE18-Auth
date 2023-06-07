import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InventoryContext } from "../InventoryContext";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  FormGroup,
  CardSubtitle,
  Alert,
} from "reactstrap";

const ProductView = () => {
  const { id: productId } = useParams();
  const { addToInventory } = useContext(InventoryContext);
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [notification, setNotification] = useState(null);

  const handleQuantityChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };

  const getImage = (colour) => {
    const { attributes } = product;
    const image = attributes.images.data.find((image) =>
      image.attributes.name.includes(colour)
    );

    return image.attributes.url || "";
  };

  const handleAddToBasket = () => {
    addToInventory(product);
    setNotification("Item added to basket!");
  };

  useEffect(() => {
    if (product && product.attributes) {
      const { attributes } = product;
      setSelectedColor(attributes.colours[0].name);
      setSelectedSize(attributes.sizes[0].name);
    }
  }, [product, setSelectedColor, setSelectedSize]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          `http://localhost:1337/api/products/${productId}?populate=*`
        );
        setProduct(data);
      } catch (error) {
        console.log({ error });
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product || !product.attributes) {
    return null;
  }

  const { attributes } = product;

  const quantity = Array.from(Array(Number(attributes.quantity)).keys());

  return (
    <Card className="product-details">
      {notification && <Alert color="success">{notification}</Alert>}
      <Row>
        <Col sm="12" md="4">
          <CardImg
            left="true"
            width="100%"
            src={`http://localhost:1337${getImage(selectedColor)}`}
            alt=""
          />
        </Col>
        <Col sm="12" md="8">
          <CardBody>
            <CardTitle>{attributes.name}</CardTitle>
            <CardText>{attributes.description}</CardText>
            <CardSubtitle>
              <strong>Price: P{attributes.price}</strong>
            </CardSubtitle>
            <CardSubtitle>{attributes.quantity} items Left</CardSubtitle>
            <div>
              <CardSubtitle>Win or Lose?:</CardSubtitle>
              <div className="sizes">
                {attributes.sizes.map((size) => (
                  <span
                    key={size.name}
                    className={`${selectedSize === size.name ? "active" : ""}`}
                    onClick={() => setSelectedSize(size.name)}
                  >
                    {size.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <CardSubtitle>Selected colour: {selectedColor}</CardSubtitle>
              <div className="colours">
                {attributes.colours.map((colour) => (
                  <span
                    key={colour.name}
                    className={`${
                      selectedColor === colour.name ? "active" : ""
                    }`}
                    onClick={() => setSelectedColor(colour.name)}
                  >
                    <img
                      src={`http://localhost:1337${getImage(colour.name)}`}
                      alt={colour.name}
                    />
                  </span>
                ))}
              </div>
              <FormGroup className="quantity">
                <Label for="exampleSelect">Selected items</Label>
                <Input
                  value={selectedQuantity}
                  type="select"
                  name="quantity"
                  id="exampleSelect"
                  onChange={handleQuantityChange}
                >
                  {quantity.map((number) => (
                    <option key={number}>{number}</option>
                  ))}
                </Input>
              </FormGroup>
            </div>
            <Button color="primary" onClick={handleAddToBasket}>
              Add to basket
            </Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductView;
