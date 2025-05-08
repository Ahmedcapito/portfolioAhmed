'use client';
import React from "react";
import { motion } from "framer-motion"; 

const About = () => {
  return (
    <div className="text-center w-full mt-8 mx-auto px-4 sm:px-6 md:px-8">
      <motion.h1
        className="text-4xl font-bold text-blue-950 sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>
      
      <hr className="w-24 mx-auto mt-5 mb-5" />
      
    
      <motion.p
        className="text-lg font-medium text-gray-700 sm:text-xl md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Front-end developer passionate about creating dynamic, responsive and
        user-friendly web applications. With strong proficiency in JavaScript,
        React, HTML and CSS and contributed to 7+ hands-on projects. My
        expertise lies in transforming complex requirements into seamless and
        intuitive user interfaces that enhance user experience. Committed to
        continuous learning, I use the latest technologies to deliver
        exceptional results and stay up-to-date with industry trends.
        Additionally, I am a Front-End participant for the oi Microsoft
        Crossover Student Branch.
      </motion.p>
    </div>
  );
};

export default About;
