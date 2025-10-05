"use client";

import React from 'react';
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I used to dread dental visits, but this clinic changed everything! The staff is incredibly friendly, and Dr. Smith is so gentle and thorough. My smile has never looked better!",
      author: "Jane D.",
      city: "Smile City"
    },
    {
      quote: "Outstanding service from start to finish. The clinic is modern, clean, and they use the latest technology. I highly recommend them for all your dental needs.",
      author: "John S.",
      city: "Dental Town"
    },
    {
      quote: "The best dental experience I've ever had. They truly care about their patients and provide personalized care. I'm so glad I found this place!",
      author: "Emily R.",
      city: "Healthy Gums"
    },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary text-secondary-foreground text-center">
      <motion.h2
        className="text-5xl font-extrabold text-primary mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        What Our Patients Say
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center justify-between h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={index}
          >
            <p className="text-lg italic leading-relaxed mb-6">\" {testimonial.quote} \"</p>
            <div className="text-center">
              <p className="font-bold text-primary-foreground text-xl">{testimonial.author}</p>
              <p className="text-primary-foreground/80 text-md">{testimonial.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
