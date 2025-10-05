'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of dental services including general dentistry (check-ups, cleanings, fillings), cosmetic dentistry (whitening, veneers), orthodontics (braces, aligners), and emergency dental care."
    },
    {
      question: "Do you accept new patients?",
      answer: "Absolutely! We are always happy to welcome new patients to our clinic. Please call us to schedule your first appointment."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major dental insurance plans. Please contact our office with your insurance details, and our staff will be happy to verify your coverage."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "It is generally recommended to visit the dentist for a check-up and cleaning every six months to maintain optimal oral health and prevent potential issues."
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "If you experience a dental emergency such as severe pain, a knocked-out tooth, or a broken tooth, please call our office immediately. We offer emergency dental care and will do our best to see you as soon as possible."
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <section id="faq" className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-primary text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              custom={index}
            >
              <div className="flex justify-between items-center" onClick={() => toggleFAQ(index)}>
                <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                <span className="text-foreground text-2xl">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                {activeIndex === index && (
                  <p className="mt-4 text-foreground leading-relaxed">{faq.answer}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
