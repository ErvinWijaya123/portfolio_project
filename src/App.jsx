import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
