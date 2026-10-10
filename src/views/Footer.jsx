import React from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    support: {
      title: "Support",
      items: ["Help centre", "Account information", "About", "Contact us"],
    },
    help: {
      title: "Help and Solution",
      items: ["Talk to support", "Support docs", "System status", "Covid responde"],
    },
    product: {
      title: "Product",
      items: ["Update", "Security", "Beta test", "Pricing product"],
    },
  };

  return (
    <footer className="w-full bg-[#161a22] text-white pt-16 pb-12 px-6 sm:px-12 lg:px-20 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Logo & Newsletter Input */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#52BA8C] tracking-tight">
              Biccas
            </h2>
            
            <p className="text-slate-400 text-sm">
              Get started noew try our product
            </p>

            {/* Email Input with Pill Button */}
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full bg-transparent border border-slate-700 rounded-full px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#52BA8C] pr-14"
              />
              <button 
                type="button"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#52BA8C] text-[#161a22] flex items-center justify-center hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Columns: Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.values(footerLinks).map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-sm font-semibold text-white tracking-wide">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Copyright & Terms Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-8 border-t border-slate-800/80">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms and Condtions
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}