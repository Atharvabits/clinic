"use client";

import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/dentist-1.jpg", alt: "Dentist working on a patient" },
    { src: "/dentist-2.jpg", alt: "Dental clinic waiting area" },
    { src: "/dentist-3.jpg", alt: "Modern dental equipment" },
    { src: "/dentist-4.jpg", alt: "Happy patient smiling" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background text-foreground text-center">
      <motion.h2
        className="text-5xl font-extrabold text-primary mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        Our Gallery
      </motion.h2>
      <motion.p
        className="mt-4 text-xl max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        Take a look at our state-of-the-art clinic and happy patients.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-primary-foreground text-xl font-semibold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
