import "./products.css";
import product_1 from "../../assets/product-1.png";
import product_2 from "../../assets/product-2.png";
import product_3 from "../../assets/product-3.png";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

const Products = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-50px" },
    { disconnectOnLeave: true }
  );
  inViewport
    ? ref.current?.classList.add("in-view")
    : ref.current?.classList.remove("in-view");

  return (
    <div ref={ref} className={"products container"}>
      <h3>Our Products</h3>
      <div className="slider">
        <ul>
          <li>
            <div className="product">
              <img src={product_1} alt="" />
              <span>Cereals - Garri Flakes</span>
            </div>
          </li>
          <li>
            <div className="product">
              <img src={product_2} alt="" />
              <span>Rhapsody Finance App</span>
            </div>
          </li>
          <li>
            <div className="product">
              <img src={product_3} alt="" />
              <span>NEM Health</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
