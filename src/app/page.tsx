'use client'

import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BackgroundGradientAnimation } from '../components/BackgroundGradientAnimation'

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <BackgroundGradientAnimation>
    <div className="flex flex-col min-h-screen overflow-y-hidden px-8 relative z-10">
      <div
        className="z-20 mt-[20vh] text-center"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <h1 className="text-slate-500 text-2xl font-mono">
          Welcome to My Portfolio!
        </h1>
        <p className="text-4xl md:text-7xl font-bold mt-8">
          Software Developer
        </p>
        <p className="text-4xl md:text-7xl mb-8 mt-4 text-slate-500">
          From Jakarta, Indonesia
        </p>
        <div className="text-4xl flex items-center justify-center mt-32">
          <FontAwesomeIcon className="animate-bounce w-4" icon={faCaretDown} />
        </div>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img
            src="/farkhanmaul/code1.svg"
            alt=""
            className="text-white backdrop-blur-sm"
          />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Skills</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          My technical expertise
        </p>
      </h1>
      <div
        className="flex flex-wrap items-center justify- gap-4 mt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/Node.js?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/Java?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/PHP?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Spring%20Boot?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Express?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Database/MySQL?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Database/PostgreSQL?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Database/Oracle?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/Google%20Cloud?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/AWS?theme=dark" />
      </div>
      <div
        className=" mt-8 flex items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          className="hidden lg:block border border-stone-800 rounded-lg"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=farkhanmaul&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=800"
          alt="farkhanmaul"
        />
        <img
          className="block lg:hidden border border-stone-800 rounded-lg"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=farkhanmaul&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=400"
          alt="farkhanmaul"
        />
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img
            src="/farkhanmaul/planet2.svg"
            alt=""
            className="text-white backdrop-blur-sm"
          />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Projects</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          Highlighted works
        </p>
      </h1>
      <div
        className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Project Cards */}
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-sm hover:border-blue-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">FRESHCAN</h3>
          <p className="text-slate-400 mb-4">Mobile app that scans fruit freshness level with ML backend and JWT authentication</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">Node.js</span>
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">Express.js</span>
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">MySQL</span>
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">GCP</span>
          </div>
        </div>
        
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-green-400 bg-opacity-20 backdrop-blur-sm hover:border-green-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">MOVIE HANZ</h3>
          <p className="text-slate-400 mb-4">Web application for exploring film data with search and detailed movie information</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-30 rounded">React.js</span>
            <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-30 rounded">API</span>
            <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-30 rounded">GitHub Pages</span>
          </div>
        </div>
        
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-purple-400 bg-opacity-20 backdrop-blur-sm hover:border-purple-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">BNI Retail Banking</h3>
          <p className="text-slate-400 mb-4">Loan Management System with REST APIs, custom forms, and database integration</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">Spring Boot</span>
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">jQuery</span>
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">Oracle</span>
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">PostgreSQL</span>
          </div>
        </div>
        
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-orange-400 bg-opacity-20 backdrop-blur-sm hover:border-orange-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">EMTEK HRIS</h3>
          <p className="text-slate-400 mb-4">Internal HR system with 40+ REST APIs for attendance, bookings, and employee management</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-orange-500 bg-opacity-30 rounded">Node.js</span>
            <span className="text-xs px-2 py-1 bg-orange-500 bg-opacity-30 rounded">Express.js</span>
            <span className="text-xs px-2 py-1 bg-orange-500 bg-opacity-30 rounded">MySQL</span>
          </div>
        </div>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img
            src="/farkhanmaul/telescope.svg"
            alt=""
            className="text-white backdrop-blur-sm"
          />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Experience</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          My professional path
        </p>
      </h1>
      <div
        className="flex flex-col mt-16 space-y-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex items-start space-x-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
          <div>
            <h3 className="text-xl font-bold">Junior Software Developer</h3>
            <p className="text-slate-400">PT. Bank Negara Indonesia (BNI) • Nov 2024 - May 2025</p>
            <p className="text-slate-500 mt-2">Developed REST APIs using Spring Boot, customized form functionalities with jQuery, and collaborated with cross-functional teams in Agile environment</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
          <div>
            <h3 className="text-xl font-bold">Software Developer - Internship</h3>
            <p className="text-slate-400">PT. Elang Mahkota Teknologi (EMTEK) • Aug 2023 - Dec 2023</p>
            <p className="text-slate-500 mt-2">Created 40+ REST API endpoints for HRIS system using Node.js and Express.js with MySQL database</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
          <div>
            <h3 className="text-xl font-bold">Cloud Computing Cohort</h3>
            <p className="text-slate-400">Bangkit Academy by Google • Feb 2023 - Jul 2023</p>
            <p className="text-slate-500 mt-2">Completed comprehensive cloud computing program with hands-on projects on Google Cloud Platform</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
          <div>
            <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
            <p className="text-slate-400">Universitas Ahmad Dahlan • Sep 2020 - Sep 2024</p>
            <p className="text-slate-500 mt-2">Majored in Informatics with GPA 3.88/4.00. Active as Lab Assistant and BEM Staff</p>
          </div>
        </div>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img src="/farkhanmaul/chat.svg" alt="" className="text-white backdrop-blur-sm" />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Contact</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          Let's Connect
        </p>
      </h1>

      <div className="" data-aos="fade-up" data-aos-duration="1000">
        <div className="grid md:grid-cols-2 gap-4 mt-10 flex-col">
          <a
            href="mailto:farkhanmaul@gmail.com"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-sky-400 bg-opacity-20 backdrop-blur-sm hover:border-sky-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>Email</p>
            <p className="text-sm opacity-50">farkhanmaul@gmail.com</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/farkhanmaul/"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-sm hover:border-blue-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>LinkedIn</p>
            <p className="text-sm opacity-50">linkedin.com/in/farkhanmaul/</p>
          </a>
          <a
            target="_blank"
            href="https://github.com/farkhanmaul"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-violet-400 bg-opacity-20 backdrop-blur-sm hover:border-violet-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>GitHub</p>
            <p className="text-sm opacity-50">github.com/farkhanmaul</p>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6285123456789"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-teal-400 bg-opacity-20 backdrop-blur-sm hover:border-teal-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>WhatsApp</p>
            <p className="text-sm opacity-50">Contact via WhatsApp</p>
          </a>
        </div>
      </div>
      <div className="pt-[35vh]">
        <p className="text-center opacity-20">
          Copyright © 2025 by Farkhan Maul
        </p>
      </div>
    </div>
    </BackgroundGradientAnimation>
  )
}