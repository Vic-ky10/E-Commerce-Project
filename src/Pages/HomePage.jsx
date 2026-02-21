import axios from "axios";
import { Header } from "../components/Header";
import "./homePage.css";

import { useEffect, useState } from "react";

function HomePage() {

  const [products , setProducts] = useState([]);
  const [cart ,setCart] = useState([])

  useEffect(() => {
    // set the document title instead of rendering a <title> element in the body
    document.title = "Ecommerce Project";

    // useEffect = let us control when some code runs
    axios
      .get("http://localhost:3000/api/products") // axios is the cleaner way to make request to the backend
      .then((response) => {
       setProducts(response.data);
      });

    axios.get('http://localhost:3000/api/cart-items')
      .then((response) => {
           setCart(response.data)
      })
  }, []);

  return (
    <>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
                <div key={product.id} className="product-container">
                  <div className="product-image-container">
                    <img className="product-image" src={product.image} alt={product.name} />
                  </div>

                  <div className="product-name limit-text-to-2-lines">
                    {product.name}
                  </div>

                  <div className="product-rating-container">
                    <img
                      className="product-rating-stars"
                      src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                      alt={`Rating ${product.rating.stars} out of 5`}
                    />
                    <div className="product-rating-count link-primary">
                      {product.rating.count}
                    </div>
                  </div>

                  <div className="product-price">
                    ${ (product.priceCents / 100).toFixed(2) }
                  </div>

                  <div className="product-quantity-container">
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="product-spacer"></div>

                  <div className="added-to-cart">
                    <img src="images/icons/checkmark.png" alt="added" />
                    Added
                  </div>

                  <button className="add-to-cart-button button-primary">
                    Add to Cart
                  </button>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
