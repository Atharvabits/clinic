"use client";

import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

export default function Contact() {
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

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) } },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background text-foreground text-center">
      <motion.h2
        className="text-5xl font-extrabold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        Contact Us
      </motion.h2>
      <motion.p
        className="mt-4 text-xl font-light max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        Have questions or want to book an appointment? Reach out to us through any of the following channels or fill out the form below.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-xl">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          custom={0}
        >
          <p className="font-semibold">Email:</p>
          <p className="text-primary hover:underline"><a href="mailto:info@dentistclinic.com">info@dentistclinic.com</a></p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          custom={1}
        >
          <p className="font-semibold">Phone:</p>
          <p className="text-primary">(123) 456-7890</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          custom={2}
        >
          <p className="font-semibold">Address:</p>
          <p className="text-primary">123 Dental Street, Smile City, TX 77777</p>
        </motion.div>
      </div>
      <motion.form
        className="mt-16 max-w-xl mx-auto grid grid-cols-1 gap-6 p-8 bg-secondary rounded-xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
      >
        <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-background text-foreground border border-border focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-300" />
        <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-background text-foreground border border-border focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-300" />
        <textarea placeholder="Your Message" rows={6} className="p-4 rounded-lg bg-background text-foreground border border-border focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-300"></textarea>
        <button type="submit" className="bg-accent text-accent-foreground px-10 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-colors duration-300 shadow-lg">Send Message</button>
      </motion.form>
    </section>
  );
}
