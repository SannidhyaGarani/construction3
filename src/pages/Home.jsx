import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import BrandIntro from '../Components/home/BrandIntro';
import ServicesSection from '../Components/home/ServicesSection';
import ProjectsPreview from '../Components/home/ProjectsPreview';
import WhyChooseUs from '../Components/home/WhyChooseUs';
import Reviews from '../Components/home/Reviews';
import RecentBlogs from '../Components/home/Blogs';
import CTASection from '../Components/home/CTASection';

const Home = () => {
  return (
    <main className="bg-white text-[#111827]">
      <HeroSection />
      <BrandIntro />
      <ServicesSection />
      <ProjectsPreview />
      <WhyChooseUs />
      {/* <RecentBlogs /> */}
      <Reviews />
      <CTASection />
    </main>
  );
};

export default Home;
