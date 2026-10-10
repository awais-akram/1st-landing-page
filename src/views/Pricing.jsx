import { usePricing } from "@/controllers/usePricing";
import { Check } from "lucide-react";

export default function Pricing() {
  const { billingCycle, setBillingCycle, data } = usePricing();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Title & Subtitle */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-tight whitespace-pre-line">
          {data.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
          {data.subtitle}
        </p>

        {/* Monthly / Yearly Toggle */}
        <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-full shadow-inner mt-4">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
              billingCycle === "monthly"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Bil Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
              billingCycle === "yearly"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Bil Yearly
          </button>
        </div>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
        {data.plans.map((plan) => {
          const isPro = plan.popular;
          const currentPrice =
            billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

          return (
            <div
              key={plan.id}
              className={`relative rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-300 ${
                isPro
                ? "bg-emerald-500 text-white shadow-2xl mt-4"                  : "bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Top Details */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                <p
                  className={`text-xs leading-relaxed max-w-[200px] mx-auto ${
                    isPro ? "text-emerald-100" : "text-slate-400"
                  }`}
                >
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="pt-4 flex items-baseline justify-center">
                  <span className="text-sm font-medium align-top mr-1">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {currentPrice}
                  </span>
                </div>

                {/* Pro Discount Pill */}
                {isPro && plan.discountBadge && (
                  <div className="pt-2">
                    <span className="bg-emerald-400 text-emerald-950 text-[11px] font-semibold px-4 py-1.5 rounded-full inline-block">
                      {plan.discountBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Feature Checklist Box */}
              <div
                className={`rounded-2xl p-6 my-8 space-y-4 ${
                  isPro ? "bg-white text-slate-900" : "bg-slate-50 text-slate-700"
                }`}
              >
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full py-3.5 rounded-2xl text-sm font-semibold transition-all shadow-sm ${
                  isPro
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-white border border-slate-200 hover:bg-slate-50 text-emerald-600"
                }`}
              >
                {plan.btnText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}