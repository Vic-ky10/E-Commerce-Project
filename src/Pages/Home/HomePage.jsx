import axios from "axios";
import { Header } from "../../components/Header";
import "./homePage.css";
import ProductsGrid from './ProductsGrid'
import { useEffect, useState } from "react";


function HomePage({cart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // set the document title instead of rendering a <title> element in the body
    document.title = "Ecommerce Project";

    // useEffect = let us control when some code runs
    axios
      .get("http://localhost:3000/api/products") // axios is the cleaner way to make request to the backend
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">

         <ProductsGrid  products={products}/>
      </div>
    </>
  );
}

export default HomePage;
