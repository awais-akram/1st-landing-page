import { useState } from "react";
import { pricingSectionData } from "@/models/pricingData";

export const usePricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' ya 'yearly'

  return {
    billingCycle,
    setBillingCycle,
    data: pricingSectionData,
  };
};