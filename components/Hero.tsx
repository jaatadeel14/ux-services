"use client"
import React from 'react'
import TypingText from './TypingText'

const Hero = () => {
  const texts = ['user', 'experience', 'employee', 'customer'];

  return (
    <main className="flex flex-col items-center justify-between px-6 py-24 md:flex-row md:px-12 lg:px-24">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-black">
            We are UXservices, <br />
            we design <br />
            <span className="text-gray-700 font-semibold"><TypingText texts={texts} /></span> <br />
            experiences
          </h1>
          <a href="#" className="inline-flex items-center text-lg font-medium text-red-500 hover:underline">
            <span className="mr-2 ">—</span> explore
          </a>
        </div>
        <img 
          src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/01/29_ux_process_illustration_blog_light.jpg"
          alt="Hero Image"
          className="mt-12 md:mt-0"
          width="400"
          height="400"
          
          style={{ aspectRatio: "400/400", objectFit: "cover" }}
        />
      </main>
  )
}

export default Hero