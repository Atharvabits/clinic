import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Clinic Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dentist Clinic</h3>
          <p className="text-sm leading-relaxed">123 Dental Street, Smile City, TX 77777</p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@dentistclinic.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Gallery</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">General Dentistry</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Cosmetic Dentistry</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Orthodontics</a></li>
            <li className="mb-2"><a href="#" className="hover:text-accent transition-colors duration-300">Emergency Care</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter (Placeholder) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            {/* Replace with actual social media icons */}
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors duration-300 text-2xl">FB</a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors duration-300 text-2xl">IG</a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors duration-300 text-2xl">TW</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Dentist Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
