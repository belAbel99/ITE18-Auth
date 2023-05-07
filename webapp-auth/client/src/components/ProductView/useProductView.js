import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { toast } from "react-toastify";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/product/${id}?populate=*`
        );
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message, {
          hideProgressBar: true,
        });
      }
    };

    getProduct();
  }, [id]);

  const image = product?.attributes?.images?.data[0]?.attributes;

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      // perform add to cart action
      toast.success("Product added to cart!", {
        hideProgressBar: true,
      });
    } else {
      // redirect to login page
      navigate("/login");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Card className="product-card">
        <CardImg
          top
          width="100%"
          src={`http://localhost:1337${image?.url}`}
          alt={image?.name}
        />
        <CardBody>
          <CardTitle>{product.attributes.name}</CardTitle>
          <CardText>{product.attributes.description}</CardText>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductView;
