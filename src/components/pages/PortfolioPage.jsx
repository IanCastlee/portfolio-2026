import React from 'react';
import { MainLayout } from '../templates/MainLayout';
import { HeroSection } from '../organisms/HeroSection';
import { AboutSection, TechStackSection } from '../organisms/AboutAndTechSections';
import { ProjectsSection, CaseStudiesSection } from '../organisms/ProjectsAndCaseStudiesSections';
import { ExperienceSection, ServicesSection, ProcessSection, GithubSection } from '../organisms/MiddleSections';
import { ResumeSection, EducationSection, TestimonialsSection, ContactSection } from '../organisms/EndingSections';
import { portfolioData } from '../../data/portfolioData';

/**
 * Page: PortfolioPage
 * Composes the entire 14-section portfolio using Atomic Design components.
 */
export const PortfolioPage = () => {
  const { 
    developer, 
    techStack, 
    projects, 
    caseStudy, 
    experiences, 
    services, 
    process, 
    repositories, 
    education, 
    certifications, 
    testimonials 
  } = portfolioData;

  return (
    <MainLayout developer={developer}>
      {/* 01. HERO SECTION (Mobile Optimized) */}
      <HeroSection developer={developer} />

      {/* 02. ABOUT SECTION */}
      <AboutSection developer={developer} />

      {/* 03. TECH STACK SECTION */}
      <TechStackSection techStack={techStack} />

      {/* 04. FEATURED PROJECTS SECTION */}
      <ProjectsSection projects={projects} />

      {/* 05. CASE STUDIES SECTION */}
      <CaseStudiesSection caseStudy={caseStudy} />

      {/* 06. EXPERIENCE SECTION */}
      <ExperienceSection experiences={experiences} />

      {/* 07. SERVICES SECTION */}
      <ServicesSection services={services} />

      {/* 08. DEVELOPMENT PROCESS SECTION */}
      <ProcessSection process={process} />

      {/* 09. GITHUB & OPEN SOURCE */}
      <GithubSection repositories={repositories} githubUrl={developer?.socials?.github} />

      {/* 10. RESUME DOWNLOAD SECTION */}
      <ResumeSection />

      {/* 11. EDUCATION & CERTIFICATIONS */}
      <EducationSection education={education} certifications={certifications} />

      {/* 12. TESTIMONIALS SECTION */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 13. CONTACT SECTION */}
      <ContactSection developer={developer} />
    </MainLayout>
  );
};
