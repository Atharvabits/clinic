"use client";

import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

export default function Services() {
  const dentalServices = [
    { name: "General Dentistry", description: "Routine check-ups, fillings, and cleanings.", icon: "/file.svg" },
    { name: "Cosmetic Dentistry", description: "Teeth whitening, veneers, and smile makeovers.", icon: "/globe.svg" },
    { name: "Orthodontics", description: "Braces and clear aligners for a perfectly aligned smile.", icon: "/window.svg" },
    { name: "Emergency Dental Care", description: "Prompt treatment for dental emergencies.", icon: "/next.svg" },
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
    <section id="services" className="py-20 px-4 bg-secondary text-secondary-foreground text-center">
      <motion.h2
        className="text-5xl font-extrabold text-primary mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="mt-4 text-xl max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        We offer a comprehensive range of dental services to meet all your needs.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {dentalServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={index}
          >
            <img src={service.icon} alt={service.name} className="w-16 h-16 mb-4 text-accent" />
            <h3 className="text-3xl font-bold text-primary">{service.name}</h3>
            <p className="mt-3 text-foreground text-lg leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
