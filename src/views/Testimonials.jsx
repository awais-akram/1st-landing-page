import React, { useState } from "react";

// Assets import (About-screen folder)
import avatar1 from "@/assets/About-screen/Group 224.jpeg";
import avatar2 from "@/assets/About-screen/Group 225.jpeg";
import avatar3 from "@/assets/About-screen/Group 226.jpeg";
import avatar4 from "@/assets/About-screen/Group 227.jpeg";
import playIcon from "@/assets/About-screen/Group 215.png";
import coinIcon from "@/assets/About-screen/Group 223.png";

// Direct Vector Icons (No missing lucide package error)
const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com", // apni ID ka link yahan lagayein
    svg: (
      <svg
  className="w-5 h-5"
  viewBox="0 0 24 24"
  fill="url(#instagram-gradient)"
>
  <defs>
    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#FED373" />
      <stop offset="30%" stopColor="#F15245" />
      <stop offset="60%" stopColor="#D92E7F" />
      <stop offset="100%" stopColor="#9B36B7" />
    </linearGradient>
  </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1Shx43T2an/", // apni ID ka link yahan lagayein
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@awaisakram90?si=p2wF7iZH1mB3_uoc", // apni ID ka link yahan lagayein
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136c-1.871-.5-9.376-.5-9.376-.5s-7.504 0-9.377.5a3.017 3.017 0 0 0-2.122 2.136c-.5 1.87-.5 5.814-.5 5.814s0 3.945.5 5.814a3.016 3.016 0 0 0 2.122 2.136c1.873.5 9.377.5 9.377.5s7.505 0 9.377-.5a3.015 3.015 0 0 0 2.122-2.136c.5-1.87.5-5.814.5-5.814s0-3.945-.5-5.814zm-13.498 9.814v-8l6.5 4-6.5 4z" />
      </svg>
    ),
  },
];

export default function Testimonials() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#161a22] text-white pt-20 pb-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 space-y-7">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
              People are Saying <br /> About DoWhith
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
              Everything you need to accept to payment and grow your money of manage anywhere on planet
            </p>
          </div>

          {/* Quotation Marks */}
          <div className="text-5xl text-white font-serif font-black select-none pt-2 opacity-90 leading-none">
            “
          </div>

          <div className="space-y-3">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍
            </p>

            <p className="text-sm font-semibold text-slate-400">
              _ Awais Akram 
            </p>
          </div>

          {/* 4 Avatars + Play Button */}
          <div className="flex items-center gap-3 pt-3">
            <div className="flex items-center -space-x-2.5">
              <img src={avatar1} alt="Avatar 1" className="w-12 h-12 rounded-full border-2 border-[#161a22] object-cover" />
              <img src={avatar2} alt="Avatar 2" className="w-12 h-12 rounded-full border-2 border-[#161a22] object-cover" />
              <img src={avatar3} alt="Avatar 3" className="w-12 h-12 rounded-full border-2 border-[#161a22] object-cover" />
              <img src={avatar4} alt="Avatar 4" className="w-12 h-12 rounded-full border-2 border-[#161a22] object-cover" />
            </div>

            {/* Play Button Icon */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shrink-0">
              <img src={playIcon} alt="Play" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Right Side: Form Card + Social Media */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[440px] bg-[#222938] px-8 py-10 rounded-[38px] shadow-2xl border border-slate-700/30 space-y-5"
          >
            {/* Top Coin Graphic */}
            <div className="flex flex-col items-center justify-center space-y-3 pb-2">
              <div className="w-16 h-16 flex items-center justify-center shrink-0">
                <img src={coinIcon} alt="Coin" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Get Started
              </h3>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none placeholder-slate-400 shadow-sm"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Message</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you say ?"
                required
                className="w-full bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none placeholder-slate-400 shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#52BA8C] hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-[0.99] mt-2 cursor-pointer"
            >
              Request Demo
            </button>

            <p className="text-center text-xs text-slate-100 pt-0">
  <strong>or</strong>
  <br />
  <br />
              <span className="text-white font-semibold cursor-pointer hover:underline">
                Start Free Trial
              </span>
            </p>
          </form>

          {/* Social Media Icons (Direct Clickable Links) */}
          <div className="w-full max-w-[440px] flex justify-center gap-4 pt-1">
            {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/60 bg-[#222938] text-slate-400 hover:border-[#52BA8C] hover:text-[#52BA8C] transition-all hover:scale-110 shadow-md cursor-pointer"
              >
                {item.svg}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}