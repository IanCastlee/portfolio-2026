import React from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/EndingSections';

/**
 * Template: MainLayout
 * Wraps the application with global Navbar and Footer structure.
 */
export const MainLayout = ({ children, developer }) => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar developer={developer} />
      <main className="flex-1">
        {children}
      </main>
      <Footer developer={developer} />
    </div>
  );
};
