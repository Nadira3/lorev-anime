import Contact from "./components/Contact/Contact.jsx";
import Documentary from "./components/Documentary/Documentary.jsx";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero";
import Motivational from "./components/Motivational/Motivational";
import NavBar from "./components/Navbar/NavBar";
import Preloader from "./components/Preloader/Preloader.jsx";
import Products from "./components/Products/Products";
import { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  let count = 0;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 100) {
        clearInterval(interval);
        setLoading(false);
      } else count += 5;
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <NavBar />
          <Hero />
          <div className="container">
            <Products />
            <Events />
            <Documentary />
            <Motivational />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
