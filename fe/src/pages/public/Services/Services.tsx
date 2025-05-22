import React from "react";
import ServicesOverviewSection from "~/compoments/section/services/ServicesOverviewSection";
import PricingSection from "~/compoments/section/services/PricingSection";
import FAQSection from "~/compoments/section/services/FAQSection";
import HomeSlider from "~/compoments/section/home/HomeSlider";

const Services: React.FC = () => {
  return (
    <div>
      <HomeSlider />
      <ServicesOverviewSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Services;
