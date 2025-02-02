import Contact from "./components/Contact/Contact.jsx";
import Documentary from "./components/Documentary/Documentary.jsx";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero";
import Motivational from "./components/Motivational/Motivational";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";
import "./index.css";

const App = () => (
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
);

export default App;
