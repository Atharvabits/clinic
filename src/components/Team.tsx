"use client";

import Image from "next/image";
import React from 'react';
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Shubham Parmar",
      title: "Lead Dentist",
      image: "/dentist-1.jpg",
      bio: "Dr. Shubham is passionate about creating healthy, beautiful smiles. With over 5 years of experience, he combines artistry with advanced dental techniques."
    },
    {
      name: "Dr. Shivani Parmar",
      title: "Pediatric Dentist",
      image: "/dentist-3.jpg",
      bio: "Dr. Shivani loves working with children and makes dental visits fun and comfortable. She focuses on preventative care and educating young patients on oral hygiene."
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
    <section id="team" className="py-20 px-4 bg-background text-foreground text-center">
      <motion.h2
        className="text-5xl font-extrabold text-primary mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        Meet Our Expert Team
      </motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={index}
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-accent">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-2">{member.name}</h3>
            <p className="text-accent font-semibold text-lg mb-4">{member.title}</p>
            <p className="text-lg leading-relaxed text-foreground">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
