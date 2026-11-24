import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Leaf, IndianRupee, TreePine } from 'lucide-react';

export default function Calculator() {
  const [bill, setBill] = useState<number>(5000);

  // Simplified assumptions for calculation
  const monthlySavings = bill * 0.9; // Assume 90% savings
  const yearlySavings = monthlySavings * 12;
  const systemSize = bill / 1000; // rough kW estimate
  const co2Saved = systemSize * 1.5; // tons per year
  const treesPlanted = Math.round(systemSize * 25);

  return (
    <section className="py-24 bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-400"></span> Smart Investment
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6 leading-tight">
              Calculate Your <span className="text-gradient">Solar Savings</span>
            </h3>
            <p className="text-gray-600 dark:text-light-100/70 mb-10 text-lg">
              Discover how much you can save by switching to solar. Our AI-driven calculator provides an instant estimate of your ROI and environmental impact.
            </p>

            <div className="glass-panel p-8 rounded-2xl border-t border-t-gold-500/30">
              <label className="block text-navy-900 dark:text-white font-medium mb-4">
                Average Monthly Electricity Bill (₹)
              </label>
              <div className="flex items-center gap-4 mb-6">
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="1000"
                  value={bill} 
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-gray-50 dark:bg-navy-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-light-100/60">₹</span>
                <input 
                  type="number" 
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 rounded-xl py-3 pl-8 pr-4 text-navy-900 dark:text-white font-heading text-xl focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl border border-navy-900/5 dark:border-white/5 flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-400">
                <IndianRupee className="w-6 h-6" />
              </div>
              <p className="text-gray-500 dark:text-light-100/60 text-sm mb-1">Yearly Savings</p>
              <h4 className="font-heading font-bold text-3xl text-navy-900 dark:text-white">₹{yearlySavings.toLocaleString('en-IN')}</h4>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-navy-900/5 dark:border-white/5 flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <CalcIcon className="w-6 h-6" />
              </div>
              <p className="text-gray-500 dark:text-light-100/60 text-sm mb-1">System Size</p>
              <h4 className="font-heading font-bold text-3xl text-navy-900 dark:text-white">{systemSize.toFixed(1)} kW</h4>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-navy-900/5 dark:border-white/5 flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-4 text-teal-400">
                <Leaf className="w-6 h-6" />
              </div>
              <p className="text-gray-500 dark:text-light-100/60 text-sm mb-1">CO₂ Saved / Year</p>
              <h4 className="font-heading font-bold text-3xl text-navy-900 dark:text-white">{co2Saved.toFixed(1)} Tons</h4>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-navy-900/5 dark:border-white/5 flex flex-col items-center text-center hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <TreePine className="w-6 h-6" />
              </div>
              <p className="text-gray-500 dark:text-light-100/60 text-sm mb-1">Trees Equivalent</p>
              <h4 className="font-heading font-bold text-3xl text-navy-900 dark:text-white">{treesPlanted}</h4>
            </div>

            <div className="col-span-2 mt-4 text-center">
              <p className="text-xs text-gray-400 dark:text-light-100/40">*This is an estimated calculation. Actual savings may vary based on site conditions, roof space, and local tariffs.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
