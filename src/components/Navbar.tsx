export default function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-white">Dentist Clinic</div>
      <div className="flex space-x-6 items-center">
        <a href="#hero" className="text-white hover:text-accent font-semibold transition-colors duration-300 scroll-smooth">Home</a>
        <a href="#about" className="text-white hover:text-accent font-semibold transition-colors duration-300 scroll-smooth">About Us</a>
        <a href="#services" className="text-white hover:text-accent font-semibold transition-colors duration-300 scroll-smooth">Services</a>
        <a href="#gallery" className="text-white hover:text-accent font-semibold transition-colors duration-300 scroll-smooth">Gallery</a>
        <a href="#contact" className="text-white hover:text-accent font-semibold transition-colors duration-300 scroll-smooth">Contact</a>
        <button className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-md font-bold hover:bg-accent/90 transition-colors duration-300 shadow-md">Book Now</button>
      </div>
    </nav>
  );
}
