'use client';
import React, { useEffect, useState } from 'react';
import { dataProjects } from '@/data/data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(dataProjects);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl px-6 lg:px-8 mt-30">
      {card.map((r, index) => (
        <motion.div
          key={r.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="p-10 w-full text-center border-b-blue-950 border-2 rounded-lg shadow-md bg-white"
        >
          <div>
            <h1 className="font-bold text-2xl text-blue-950">{r.title}</h1>
            <p className="font-bold text-sm text-gray-700 mt-2">{r.desc}</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Link
              className="bg-blue-950 hover:bg-blue-800 text-lg font-bold px-4 py-1 rounded-lg text-amber-100 transition"
              href={r.github}
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="bg-blue-950 hover:bg-blue-800 text-lg font-bold px-4 py-1 rounded-lg text-amber-100 transition"
              href={r.view}
              target="_blank"
            >
              View
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
