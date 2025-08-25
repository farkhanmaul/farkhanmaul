'use client'

import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden px-8 bg-black text-white">
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
          Frontend Developer
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
            src="/code1.svg"
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
        <img src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Design/Figma?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/Vercel?theme=dark" />
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
            src="/planet2.svg"
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
          <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
          <p className="text-slate-400 mb-4">Modern portfolio built with Next.js, TypeScript, and Tailwind CSS</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">Next.js</span>
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">TypeScript</span>
            <span className="text-xs px-2 py-1 bg-blue-500 bg-opacity-30 rounded">Tailwind</span>
          </div>
        </div>
        
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-green-400 bg-opacity-20 backdrop-blur-sm hover:border-green-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">E-Commerce App</h3>
          <p className="text-slate-400 mb-4">Full-stack e-commerce solution with payment integration</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-30 rounded">React</span>
            <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-30 rounded">Node.js</span>
            <span className="text-xs px-2 py-1 bg-green-500 bg-opacity-30 rounded">MongoDB</span>
          </div>
        </div>
        
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-purple-400 bg-opacity-20 backdrop-blur-sm hover:border-purple-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">Task Management</h3>
          <p className="text-slate-400 mb-4">Collaborative task management platform with real-time updates</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">Vue.js</span>
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">Socket.io</span>
            <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded">PostgreSQL</span>
          </div>
        </div>
        
        <div className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-orange-400 bg-opacity-20 backdrop-blur-sm hover:border-orange-500 border border-slate-800 cursor-pointer">
          <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
          <p className="text-slate-400 mb-4">Real-time weather monitoring with beautiful data visualization</p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-orange-500 bg-opacity-30 rounded">React</span>
            <span className="text-xs px-2 py-1 bg-orange-500 bg-opacity-30 rounded">Chart.js</span>
            <span className="text-xs px-2 py-1 bg-orange-500 bg-opacity-30 rounded">API</span>
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
            src="/telescope.svg"
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
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p className="text-slate-400">Tech Company • 2023 - Present</p>
            <p className="text-slate-500 mt-2">Developing modern web applications using React, Next.js, and TypeScript</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
          <div>
            <h3 className="text-xl font-bold">UI/UX Designer</h3>
            <p className="text-slate-400">Design Agency • 2022 - 2023</p>
            <p className="text-slate-500 mt-2">Created user interfaces and experiences for various digital products</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
          <div>
            <h3 className="text-xl font-bold">Web Developer Intern</h3>
            <p className="text-slate-400">Startup Company • 2021 - 2022</p>
            <p className="text-slate-500 mt-2">Learned modern web development practices and contributed to team projects</p>
          </div>
        </div>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img src="/chat.svg" alt="" className="text-white backdrop-blur-sm" />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Contact</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          Let's Connect
        </p>
      </h1>

      <div className="" data-aos="fade-up" data-aos-duration="1000">
        <div className="grid md:grid-cols-2 gap-4 mt-10 flex-col">
          <a
            href="mailto:farkhanmaul@example.com"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-sky-400 bg-opacity-20 backdrop-blur-sm hover:border-sky-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>Email</p>
            <p className="text-sm opacity-50">farkhanmaul@example.com</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/farkhanmaul/"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-sm hover:border-blue-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>LinkedIn</p>
            <p className="text-sm opacity-50">/farkhanmaul</p>
          </a>
          <a
            target="_blank"
            href="https://github.com/farkhanmaul"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-violet-400 bg-opacity-20 backdrop-blur-sm hover:border-violet-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>GitHub</p>
            <p className="text-sm opacity-50">/farkhanmaul</p>
          </a>
          <a
            href="https://instagram.com/farkhanmaul"
            target="_blank"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-pink-400 bg-opacity-20 backdrop-blur-sm hover:border-pink-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>Instagram</p>
            <p className="text-sm opacity-50">@farkhanmaul</p>
          </a>
        </div>
      </div>
      <div className="pt-[35vh]">
        <p className="text-center opacity-20">
          Copyright © 2025 by Farkhan Maul
        </p>
      </div>
    </div>
  )
}