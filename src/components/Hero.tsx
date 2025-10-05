"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) } },
  };

  return (
    <section id="hero" className="relative bg-primary text-primary-foreground py-32 px-4 text-center overflow-hidden">
      <Image
        src="/dentist-1.jpg"
        alt="Dentist office"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0 opacity-40"
      />
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-6xl font-extrabold leading-tight drop-shadow-md">Your Brightest Smile Starts Here</motion.h1>
        <motion.p variants={itemVariants} className="mt-6 text-2xl font-light drop-shadow-sm">Providing exceptional dental care for a healthy, happy you.</motion.p>
        <motion.button variants={itemVariants} className="mt-10 bg-accent text-accent-foreground px-12 py-6 rounded-full text-2xl font-bold hover:bg-accent/90 transition-colors duration-300 shadow-xl transform hover:scale-105">Book an Appointment</motion.button>
      </motion.div>
    </section>
  );
}
