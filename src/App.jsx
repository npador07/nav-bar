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
          isScrolled ? "bg-orange-900 shadow-md" : "bg-orange-800"

        }`}
      >
        <div className="max-w-screen-lg mx-auto p-4 flex justify-between items-center">
          <a href="#home" className="font-bold text-white text-xl">
            B & N Coffee House
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-blue-400 text-white">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 text-white">
              About
            </a>
            <a href="#products" className="hover:text-blue-400 text-white">
              Products
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none text-3xl transition-colors
              ${isScrolled ? "text-white" : "text-white"}`}
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
          <a
            href="#home"
            className="text-orange-900 hover:text-orange-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-orange-900 hover:text-orange-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#products"
            className="text-orange-900 hover:text-orange-600"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-screen-lg mx-auto p-4 space-y-10">
        {/* HOME SECTION */}
        <div
          id="home"
          className="relative h-screen w-full flex items-center justify-center text-white"
        >
          <img
            src={logo}
            alt="Coffee"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* ABOUT SECTION */}
        <div
          id="about"
          className="min-h-screen bg-orange-100 flex flex-col items-center justify-center px-8 text-center"
        >
          <h2 className="text-4xl font-bold text-orange-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-orange-800 max-w-2xl leading-relaxed">
            We began operations in November 2025 with a small, passionate team
            dedicated to providing quality service to the students of Central
            Philippine University. Our mission is to create a warm and inviting
            space where everyone can enjoy great coffee, good food, and a
            welcoming atmosphere.
          </p>
        </div>

        {/* PRODUCTS SECTION */}
        <div id="products" className="min-h-screen bg-orange-50 py-20 px-6">
          <h2 className="text-4xl font-bold text-orange-900 text-center mb-12">
            Our Products
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-orange-200">
              <h3 className="text-2xl font-semibold text-orange-900 mb-2">
                Hot Coffee
              </h3>
              <p className="text-orange-700">
                Freshly brewed hot coffee made daily.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-orange-200">
              <h3 className="text-2xl font-semibold text-orange-900 mb-2">
                Iced Coffee
              </h3>
              <p className="text-orange-700">
                Perfectly chilled refreshments for warm days.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-orange-200">
              <h3 className="text-2xl font-semibold text-orange-900 mb-2">
                Snacks
              </h3>
              <p className="text-orange-700">
                Pastries, sandwiches, and light snacks.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
