import React from 'react';
import { MainLayout } from '../templates/MainLayout';
import { ProfileBannerHeader } from '../organisms/ProfileBannerHeader';
import { BentoProfileFeed } from '../organisms/BentoProfileFeed';
import { portfolioData } from '../../data/portfolioData';

/**
 * Page: PortfolioPage
 * Modern Developer Hub & Bento Profile Layout inspired by castillo-ian.vercel.app
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
    education 
  } = portfolioData;

  return (
    <MainLayout developer={developer}>
      <div className="pt-20 sm:pt-28 px-0 sm:px-4">
        {/* 01. Cover Banner & Profile Header */}
        <ProfileBannerHeader developer={developer} />

        {/* 02. Bento 2-Column Developer Feed */}
        <BentoProfileFeed
          developer={developer}
          techStack={techStack}
          projects={projects}
          caseStudy={caseStudy}
          experiences={experiences}
          services={services}
          process={process}
          education={education}
        />
      </div>
    </MainLayout>
  );
};
