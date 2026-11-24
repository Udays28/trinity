import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Zap, Sun, BatteryCharging, ShieldCheck } from 'lucide-react';

const BRANDS = ['Gautam', 'Vsole', 'Adani', 'Waaree', 'HDGI Structure', 'Polycab', 'KEI', 'Sungrow'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-12009cb8d9e6?auto=format&fit=crop&q=80&w=2560"
          alt="Solar Farm at Sunrise"
          className="w-full h-full object-cover scale-105 transform origin-center animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-navy-900/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 dark:from-navy-900 dark:via-navy-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-gold-500/30 mb-8 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
              </span>
              <span className="text-xs font-semibold text-navy-900 dark:text-white uppercase tracking-widest">
                India's Trusted Solar EPC Partner
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-bold text-navy-900 dark:text-white leading-[1.1] mb-6">
              Powering Tomorrow <br />
              With <span className="text-gradient">Smart Solar</span> Solutions
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-light-100/80 max-w-2xl mb-10 leading-relaxed font-light">
              End-to-end solar engineering, procurement, and construction. Delivering high-performance, sustainable energy systems for residential, commercial, and industrial clients.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(255,193,7,0.3)] transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,193,7,0.4)]"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 glass-panel border border-navy-900/20 dark:border-white/20 hover:bg-navy-900/5 dark:hover:bg-white/5 text-navy-900 dark:text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all"
              >
                Explore Projects
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
              {[
                { label: 'Projects Completed', value: '100+' },
                { label: 'Commercial Wins', value: '20+' },
                { label: 'Expert Engineers', value: '40+' },
                { label: 'Quality Focus', value: '100%' },
              ].map((stat, idx) => (
                <div key={idx} className="relative pl-4">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${idx === 0 ? 'bg-gold-500 shadow-[0_0_10px_rgba(255,193,7,0.5)]' : 'bg-navy-900/20 dark:bg-white/20'}`}></div>
                  <div className="text-3xl font-heading font-bold text-navy-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating UI Elements for Visual Depth */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px]"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass-panel p-6 rounded-2xl shadow-2xl w-64 border-gold-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 dark:text-white">Peak Efficiency</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Next-gen Bifacial</p>
                </div>
              </div>
              <div className="h-2 w-full bg-navy-900/10 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gold-500 w-[95%] rounded-full shadow-[0_0_10px_rgba(255,193,7,0.5)]"></div>
              </div>
              <div className="mt-2 text-right text-xs font-bold text-gold-600">95% Output</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 glass-panel p-6 rounded-2xl shadow-2xl w-72 border-gold-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 dark:text-white">25-Year Warranty</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Guaranteed Performance</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-900 dark:text-white">
                <BatteryCharging className="w-4 h-4 text-green-500" /> 100% Reliable Power
              </div>
            </motion.div>

            {/* Decorative background blur circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl border-t border-navy-900/5 dark:border-white/5 py-5 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-20 items-center px-8 animate-marquee">
            {BRANDS.map((brand, i) => (
              <span key={i} className="text-lg font-heading font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-gold-500 transition-colors cursor-default">
                {brand}
              </span>
            ))}
            {BRANDS.map((brand, i) => (
              <span key={`dup-${i}`} className="text-lg font-heading font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-gold-500 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
