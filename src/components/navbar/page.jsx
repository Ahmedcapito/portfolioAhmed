'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang , setLang] = useState('en');

  const r = {
    logo : lang === 'ar' ? 'الامام' : 'Elemam',
    link_contactUs : lang === 'ar' ? 'تواصل معي' : 'ContactUs',
    link_project : lang === 'ar' ? 'المشاريع' : 'projects',
    link_About : lang === 'ar' ? 'الصفحه الرئيسيه' : 'about'
  }
  return (
    <header className={`relative ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <nav className="flex items-center justify-between p-6 lg:px-8 fixed top-0 right-0 left-0 bg-white z-50 shadow" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <h3 className="font-bold text-2xl text-blue-950">{r.logo}</h3>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <svg
              className="size-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-base font-semibold text-gray-900">
            {r.link_About}
          </Link>
          <Link href="/projects" className="text-base font-semibold text-gray-900">
            {r.link_project}
          </Link>
          <Link href="/contact" className="text-base font-semibold text-gray-900">
            {r.link_contactUs}
          </Link>
          <button className='font-bold cursor-pointer' onClick={()=> setLang(lang === 'en' ? 'ar' : 'en')}>
            {lang === 'en' ? 'العربية' : 'English'} 
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white shadow-md mt-20 px-6 py-4 space-y-4 fixed top-0 left-0 right-0 z-40"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="block text-base font-semibold text-gray-900" onClick={() => setIsMenuOpen(false)}>
            {r.link_About}
          </Link>
          <Link href="/projects" className="block text-base font-semibold text-gray-900" onClick={() => setIsMenuOpen(false)}>
            {r.link_project}
          </Link>
          <Link href="/contact" className="block text-base font-semibold text-gray-900" onClick={() => setIsMenuOpen(false)}>
            {r.link_contactUs}
          </Link>
          <button className='font-bold cursor-pointer' onClick={()=> setLang(lang === 'en' ? 'ar' : 'en')}>
            {lang === 'en' ? 'العربية' : 'English'} 
          </button>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
