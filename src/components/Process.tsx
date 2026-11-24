import { motion } from 'motion/react';
import { Map, PenTool, ShoppingCart, Wrench, Activity, Power, Settings } from 'lucide-react';

const steps = [
  { icon: Map, title: 'Site Survey', desc: 'Detailed analysis of your location and energy needs.' },
  { icon: PenTool, title: 'Design', desc: 'Custom engineering and optimal system architecture.' },
  { icon: ShoppingCart, title: 'Procurement', desc: 'Sourcing premium components from top manufacturers.' },
  { icon: Wrench, title: 'Installation', desc: 'Expert mounting and structural setup by certified professionals.' },
  { icon: Activity, title: 'Testing', desc: 'Rigorous quality checks and system diagnostics.' },
  { icon: Power, title: 'Commissioning', desc: 'Grid integration and formal system activation.' },
  { icon: Settings, title: 'Maintenance', desc: 'Ongoing support and performance monitoring.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 dark:from-navy-800 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 justify-center flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-400"></span> How We Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">
            Our 7-Step <span className="text-gradient">EPC Process</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-50 dark:bg-navy-800 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 border-2 border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(255,193,7,0.3)] transition-all relative">
                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gold-500 text-navy-900 dark:text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-navy-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-light-100/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
