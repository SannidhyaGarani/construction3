import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import BrandIntro from '../Components/home/BrandIntro';
import StatsSection from '../Components/home/StatsSection';
import ServicesSection from '../Components/home/ServicesSection';
import WhyChooseUs from '../Components/home/WhyChooseUs';
import ProjectsPreview from '../Components/home/ProjectsPreview';
import CTASection from '../Components/home/CTASection';
import RecentBlogs from '../Components/home/Blogs';

const Home = () => {
  return (
    <main className="bg-[#F6F4EF] text-[#111827]">
      <HeroSection />
      <BrandIntro />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <ProjectsPreview />
      <RecentBlogs/>
      <CTASection />
    </main>
  );
};

export default Home;

