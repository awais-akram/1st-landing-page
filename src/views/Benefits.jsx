import { benefitsData } from "@/models/benefitsData";
import { Check } from "lucide-react";

// Image imports (verify exact filenames in your assets folder)
import laptopImg from "@/assets/Benifit-Screen/Rectangle 48.png";
import userCardImg from "@/assets/Benifit-Screen/Group 111.png";
import incomeCardImg from "@/assets/Benifit-Screen/Group 112.png";
import successCardImg from "@/assets/Benifit-Screen/Group 114.png";

export default function Benefits() {
    return (
        <section
        id="benefits"
        className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Column: Heading and Checklist */}
                <div className="lg:col-span-5 space-y-8">
                    <h2 className="text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.2] tracking-tight whitespace-pre-line">
                        {benefitsData.title}
                    </h2>

                    <ul className="space-y-5">
                        {benefitsData.list.map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </span>
                                <span className="text-slate-700 font-medium text-base">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column: Main Image Frame with Positioned Cards */}
                <div className="lg:col-span-7 flex justify-center items-center">
<div className="relative w-full max-w-[350px]">
                        {/* 1. Main Laptop Image Container */}
                        <div className="w-full h-[380px] sm:h-[420px] rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                            <img
                                src={laptopImg}
                                alt="Workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* 2. Top-Left Floating Card: Amanda Young */}
                  <div className="absolute top-4 -left-5 sm:-left-8 z-20 w-50 sm:w-50">
                            <img
                                src={userCardImg}
                                alt="Amanda Young"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* 3. Top-Right Floating Card: Total Income */}
                        <div className="absolute top-8 -right-8 sm:-right-12 z-30 w-32 sm:w-36">
                            <img
                                src={incomeCardImg}
                                alt="Total Income"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* 4. Bottom-Left Floating Card: Money Transfer Successful */}
                        <div className="absolute -bottom-6 left-0 sm:-left-6 z-30 w-52 sm:w-60">
                            <img
                                src={successCardImg}
                                alt="Money Transfer Successful"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* 5. Floating Green Vector Icon (Middle Left) */}
                        <div className="absolute top-1/2 -left-8 sm:-left-12 -translate-y-1/2 z-20 w-11 h-11 bg-emerald-400 rounded-2xl shadow-lg flex items-center justify-center rotate-[-12deg]">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}