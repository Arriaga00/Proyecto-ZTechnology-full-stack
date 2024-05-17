import { useState } from "react";
import CardProduct from "../components/Product/cardPrpduct/CardProduct";

const Products = () => {
  const [newProduct, steNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  return (
    <>
      <section className="container-cards">
        <CardProduct steNewProduct={steNewProduct} newProduct={newProduct} />
      </section>
    </>
  );
};

export default Products;
