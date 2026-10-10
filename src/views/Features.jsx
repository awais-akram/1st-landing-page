import { featuresSectionData } from "@/models/featuresData";

// Apne assets folder se 3 card photos import karein:
import collabImg from "@/assets/Features/Frame 247.png";
import storageImg from "@/assets/Features/Frame 53.png";
import analyticsImg from "@/assets/Features/Frame 54.png";

const cardImages = {
  collab: collabImg,
  storage: storageImg,
  analytics: analyticsImg,
};

export default function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 leading-tight whitespace-pre-line">
          {featuresSectionData.title}
        </h2>
        
        <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
          {featuresSectionData.description}
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm px-7 py-3 rounded-full transition-colors self-start md:self-center shrink-0 shadow-sm">
          {featuresSectionData.buttonText}
        </button>
      </div>

      {/* 3 Feature Boxes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {featuresSectionData.cards.map((item) => (
          <div key={item.id} className="flex flex-col space-y-5">
            {/* Box Image Container */}
            <div className="w-full bg-[#F9FBFC] rounded-3xl overflow-hidden p-4 sm:p-6 flex items-center justify-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={cardImages[item.imageKey]}
                alt={item.title}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Title & Description Below Image */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}