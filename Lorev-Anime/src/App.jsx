import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";
import Events from "./components/Events/Events";
import Motivational from "./components/Motivational/Motivational";
import "./index.css";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
      <div className="container">
        <Events />
	<Motivational />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
