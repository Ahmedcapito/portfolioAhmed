'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_sho0jt9', 'template_6drww0q', form.current, {
        publicKey: 'getw7SrbyK6A3_eAd',
      })
      .then(
        () => {
          setMessageStatus('success');
          form.current.reset();
        },
        (error) => {
          setMessageStatus('error');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Effect */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Title with motion */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-6xl tracking-tight text-blue-950 font-bold sm:text-5xl">
          Contact Us
        </h2>
        <hr className="w-40 mx-auto mt-5 mb-5" />
      </motion.div>

      {/* Form with motion */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 focus:outline-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Button with motion */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-indigo-600"
        >
          Send
        </motion.button>

        {/* Status message */}
        {messageStatus === 'success' && (
          <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
        )}
        {messageStatus === 'error' && (
          <p className="text-red-600 text-center mt-4">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
