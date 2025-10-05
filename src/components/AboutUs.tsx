"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-5xl font-extrabold text-primary leading-tight">About Our Clinic</h2>
          <p className="mt-6 text-xl text-foreground leading-relaxed">Dedicated to providing top-quality dental care in a comfortable and friendly environment. Our team of experienced professionals uses the latest technology to ensure your visits are as pleasant and effective as possible. We are committed to patient education and personalized treatment plans, helping you achieve and maintain a healthy, beautiful smile for life.</p>
          <p className="mt-4 text-xl text-foreground leading-relaxed">We believe in a holistic approach to dental health, understanding that a healthy smile contributes to overall well-being. Come experience the difference at our clinic, where your comfort and oral health are our top priorities.</p>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 relative w-full h-80 rounded-xl overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Image
            src="/dentist-2.jpg"
            alt="Smiling dentist and patient"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </motion.div>
      </div>
    </section>
  );
}
