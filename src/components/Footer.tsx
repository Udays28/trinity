import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-navy-900/5 dark:border-white/5 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Logo className="h-10 w-auto text-navy-900 dark:text-white -ml-2" />
            </div>
            <p className="text-gray-500 dark:text-light-100/60 text-sm leading-relaxed mb-4">
              Empowering India with sustainable, premium, and intelligent solar energy solutions. Your trusted EPC partner for a greener tomorrow.
            </p>
            <p className="text-gray-600 dark:text-light-100/70 text-sm font-semibold mb-6">
              GSTIN: 23AANCT3195P1ZL
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-light-100/70 hover:text-gold-600 hover:border-gold-500/50 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-light-100/70 hover:text-gold-600 hover:border-gold-500/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/trinity-energy-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-light-100/70 hover:text-gold-600 hover:border-gold-500/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-light-100/70 hover:text-gold-600 hover:border-gold-500/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-navy-900 dark:text-white font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-light-100/60">
              <li><a href="#about" className="hover:text-gold-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-600 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-gold-600 transition-colors">Projects</a></li>
              <li><a href="#process" className="hover:text-gold-600 transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-navy-900 dark:text-white font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-light-100/60">
              <li><a href="#" className="hover:text-gold-600 transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Industrial Plants</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Ground Mount Projects</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">O&M Services</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-navy-900 dark:text-white font-heading font-bold text-lg mb-6">Certifications</h4>
            <div className="grid grid-cols-2 gap-3">
              {['MNRE Approved', 'ISO 9001:2015', 'MSME Registered', 'Startup India'].map((cert, i) => (
                <div key={i} className="bg-gray-50 dark:bg-navy-800 border border-navy-900/5 dark:border-white/5 p-3 rounded-lg text-center flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-light-100/70 font-semibold">{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-navy-900/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-light-100/60">
            &copy; {new Date().getFullYear()} Trinity Power. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-light-100/60">
            <a href="#" className="hover:text-navy-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-10 right-6 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 dark:text-white shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
