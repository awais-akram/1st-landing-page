import { supportContent } from "@/models/supportData";
import { Star } from "lucide-react";

// Assets se apne 3 icons import karein:
import publishingIcon from "@/assets/Support-Screen/activity 1.png"; 
import analyticsIcon from "@/assets/Support-Screen/command 1.png"; 
import engagementIcon from "@/assets/Support-Screen/pie-chart 1.png"; 

const iconMap = {
  publishing: publishingIcon,
  analytics: analyticsIcon,
  engagement: engagementIcon,
};

export default function SupportSection() {
  return (
    <section className="w-full bg-[#F9F8FE] py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Description & Star Ratings */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
              {supportContent.heading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
              {supportContent.description}
            </p>
          </div>

          {/* Star Ratings */}
          <div className="flex items-center gap-10 sm:gap-14 pt-4">
            {supportContent.ratings.map((rate, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rate.stars
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-300 fill-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-900">{rate.score}</p>
                <p className="text-xs text-slate-400 font-medium">{rate.provider}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3 Features List with White Box Icons */}
        <div className="lg:col-span-6 space-y-8">
          {supportContent.features.map((item) => (
            <div key={item.id} className="flex items-start gap-5">
              {/* White Icon Box with Subtle Shadow */}
              <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-3">
                <img
                  src={iconMap[item.iconKey]}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}