import React from "react";
import HeroSection from "../Components/home/HeroSection";
import BrandIntro from "../Components/home/BrandIntro";
import ServicesSection from "../Components/home/ServicesSection";
import ExecutionProcess from "../Components/home/ExecutionProcess";
import ProjectsPreview from "../Components/home/ProjectsPreview";
import CostEstimator from "../Components/home/CostEstimator";
import WhyChooseUs from "../Components/home/WhyChooseUs";
import Reviews from "../Components/home/Reviews";
import FAQSection from "../Components/home/FAQSection";
import CTASection from "../Components/home/CTASection";

const Home = () => {
  return (
    <main className="bg-white text-slate-900 selection:bg-[#C8842A] selection:text-white overflow-x-hidden w-full">
      {/* 01. Hero Section: Architectural proposition, trust credentials, live stats */}
      <HeroSection />

      {/* 02. Brand Philosophy & Standards: 4 core pillars & performance metrics */}
      <BrandIntro />

      {/* 03. Capabilities & Practice Areas: Comprehensive civil & structural services */}
      <ServicesSection />

      {/* 04. Execution Process: 5-stage engineering blueprint */}
      <ExecutionProcess />

      {/* 05. Landmark Projects: Categorized portfolio of commercial & residential builds */}
      <ProjectsPreview />

      {/* 06. Interactive Feasibility Estimator: Real-time area, schedule & material calculation */}
      <CostEstimator />

      {/* 07. The Naksha Advantage: Quality benchmarks, seismic specs & comparative matrix */}
      <WhyChooseUs />

      {/* 08. Client Testimonials: Verified endorsements with project locations */}
      <Reviews />

      {/* 09. FAQs: Construction methodology, billing transparency & 10-yr warranty */}
      <FAQSection />

      {/* 10. Master Call to Action: Fast-track consultation booking & hotline */}
      <CTASection />
    </main>
  );
};

export default Home;
