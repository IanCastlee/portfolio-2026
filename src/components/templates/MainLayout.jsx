import React from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/EndingSections';
import { GeminiAssistantWidget } from '../organisms/GeminiAssistantWidget';

/**
 * Template: MainLayout
 * Wraps the application with global Navbar, Footer, and Gemini AI Assistant.
 */
export const MainLayout = ({ children, developer }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between relative transition-colors duration-200">
      <Navbar developer={developer} />
      <main className="flex-1">
        {children}
      </main>
      <Footer developer={developer} />
      {/* Floating Google Gemini AI Assistant */}
      <GeminiAssistantWidget />
    </div>
  );
};
