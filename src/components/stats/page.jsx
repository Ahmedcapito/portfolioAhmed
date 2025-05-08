'use client';
import { data } from '@/data/data';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    setDataApi(data);
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-3">
          {dataApi.map((item, index) => (
            <motion.div
              key={item.id || index}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <dt className="text-base/7 text-gray-600">{item.desc}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {item.title}
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
