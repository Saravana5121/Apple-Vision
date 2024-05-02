import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
    </>
  );
}
