'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Cursor animation
    const cursor = document.getElementById('cursor')
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.1,
          ease: "power2.out"
        })
      }
    }

    document.addEventListener('mousemove', moveCursor)

    // Hero animation
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    )

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="text-center z-10">
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Farkhan Maul
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Frontend Developer & UI/UX Designer
            <br />
            Creating beautiful digital experiences
          </p>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I'm a passionate frontend developer and UI/UX designer with a keen eye for detail and a love for creating 
              intuitive, beautiful user experiences. I specialize in modern web technologies and enjoy bringing 
              creative ideas to life through code.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-gray-600">UI/UX Design, Figma, Adobe Creative Suite</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-gray-600">React, Next.js, TypeScript, GSAP</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Creative problem solving, Modern technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </main>
  )
}