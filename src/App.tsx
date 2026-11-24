/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Products from './components/Products';
import Projects from './components/Projects';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="bg-white dark:bg-navy-900 min-h-screen text-gray-900 dark:text-light-50 relative">
      <Helmet>
        <title>Trinity Power | Premium Solar EPC Solutions in India</title>
        <meta name="description" content="Trinity Power provides top-tier residential, commercial, and industrial solar installations. Calculate your solar savings and switch to renewable energy today." />
        <meta name="keywords" content="Solar EPC, Solar Panels India, Renewable Energy, Trinity Power, Commercial Solar, Residential Solar, Solar Calculator" />
        <meta property="og:title" content="Trinity Power | Smart Solar Solutions" />
        <meta property="og:description" content="Empowering India with sustainable, premium, and intelligent solar energy solutions. Your trusted EPC partner for a greener tomorrow." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trinity Power | Smart Solar Solutions" />
        <meta name="twitter:description" content="Empowering India with sustainable, premium, and intelligent solar energy solutions." />
      </Helmet>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-500 opacity-10 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[400px] bg-blue-500 opacity-5 blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Products />
        <Projects />
        <Calculator />
        <Testimonials />
        <News />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}
