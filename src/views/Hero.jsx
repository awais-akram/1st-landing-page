import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { partnerLogos } from "@/models/heroData";

// E kuapo i keia mau inoa me na kii mai Figma mai
import heroPerson from "../assets/heropage-imgs/Frame 46.png";
import creditCardImg from "../assets/heropage-imgs/Frame 45.png";

export default function Hero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Aoao Hema: Na Huaolelo a me Pihi */}
                <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                        We’re here to <br />
                        Increase your <br />
                        <span className="relative inline-block text-slate-900">
                            Productivity
                            <svg
                                className="absolute left-0 -bottom-2 w-full h-3 text-emerald-400"
                                viewBox="0 0 250 12"
                                fill="none"
                            >
                                <path
                                    d="M3 9C60 3 180 3 247 9"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-slate-600 text-base max-w-md leading-relaxed">
                        Let’s make your work more organize and easily using the Taskio
                        Dashboard with many of the latest featuresin managing work every day.
                    </p>

                    <div className="flex items-center gap-5 pt-2">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-7 py-6 text-base font-semibold shadow-md shadow-emerald-500/20">
                            Try free trial
                        </Button>
                        <button className="flex items-center gap-2 text-slate-800 font-semibold text-sm hover:text-emerald-600 transition-colors">
                            <PlayCircle className="w-6 h-6 text-slate-600" />
                            View Demo
                        </button>
                    </div>
                </div>

                {/* Aoao Akau: Kii me na Kaleka Floating */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Papa Kahua Omaomao */}
                    <div className=" bg-emerald-500 rounded-3xl overflow-hidden flex items-end justify-center shadow-2xl">
                        <img
                            src={heroPerson}
                            alt="Productivity user"
                            className="object-cover h-[100%] w-auto z-10"
                        />
                    </div>

                    {/* Floating Card: Enter amount */}
                    <div className="absolute top-16 left-6 sm:left-12 z-30 bg-white sm:bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between gap-6 select-none pointer-events-none">
                       <div>
                           <p className="text-[11px] text-slate-400 font-medium">Enter amount</p>
                              <div className="text-base font-bold text-slate-900 pb-1 border-b border-slate-100">
                                    $450.00
                               </div>
                         </div>
                          <span className="bg-emerald-500 text-white text-xs font-medium px-5 py-2 rounded-full inline-flex items-center justify-center">
                              Send
                         </span>
                    </div>

                    {/* Kaleka Lele Lalo: Total Income */}
                    <div className="absolute bottom-16 left-6 sm:left-30 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-slate-100 z-20">
                        <p className="text-[10px] text-slate-400">Total Income</p>
                        <p className="text-base font-bold text-slate-800">$245.00</p>
                    </div>

                    {/* Kaleka Banako Akau */}
                    <div className="absolute -bottom-4 right-0 sm:-right-6 w-36 z-20 shadow-xl rounded-xl">
                        <img src={creditCardImg} alt="Credit Card" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Mahele Malalo: Na Hoailona Hui */}
            <div className="mt-28 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
                    More than 25,000 teams use Collabs
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all">
                    {partnerLogos.map((partner) => (
                        <span key={partner.name} className="text-lg font-bold tracking-tight text-slate-700">
                            {partner.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}