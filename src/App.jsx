import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Preview />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
