import React from "react";

import FeaturesSection from "~/compoments/section/home/FeaturesSection";
import AboutSection from "~/compoments/section/home/AboutSection";
import ServicesSection from "~/compoments/section/home/ServicesSection";
import TestimonialsSection from "~/compoments/section/home/TestimonialsSection";
import BlogPreviewSection from "~/compoments/section/home/BlogPreviewSection";
import CallToActionSection from "~/compoments/section/home/CallToActionSection";

import HomeSlider from "~/compoments/section/home/HomeSlider";

const Home: React.FC = () => {
  return (
    <div>
       <HomeSlider />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
