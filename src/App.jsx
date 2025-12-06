import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-orange-800 shadow-md" : "bg-orange-800"
        }`}
      >
        <div className="max-w-screen-lg mx-auto p-4 flex justify-between items-center">
          <a href="#home" className="font-bold text-xl">
            B & N Coffee House
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#products" className="hover:text-blue-500">
              Products
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex-col gap-4 p-4 bg-white shadow-md transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#products" className="hover:text-blue-500">
            Products
          </a>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-screen-lg mx-auto p-4 space-y-10">
        <div
  id="home"
  className="relative h-screen w-full flex items-center justify-center text-white"
>
  {/* Background Image */}
  <img
    src={logo}
    alt="Coffee"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

        <div id="about" className="h-screen bg-green-200 flex items-center justify-center text-3xl font-bold">
          Section 2
        </div>
        <div id="products" className="h-screen bg-blue-200 flex items-center justify-center text-3xl font-bold">
          Section 3
        </div>
      </main>
    </div>
  );
}

export default App;
