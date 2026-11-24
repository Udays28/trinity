import { motion } from 'motion/react';
import { ShieldCheck, Timer, Wrench, Award } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: '25-Year Warranty',
    description: 'We offer industry-leading warranties on panels and performance guarantees to secure your investment long-term.'
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    description: 'Our streamlined EPC process ensures your project is completed within the promised timeframe, without cost overruns.'
  },
  {
    icon: Wrench,
    title: 'In-House Experts',
    description: 'From design to installation, our in-house team of certified engineers handles everything. We do not outsource.'
  },
  {
    icon: Award,
    title: 'Tier-1 Equipment',
    description: 'We only partner with top-tier global manufacturers like Adani, Waaree, and Sungrow for maximum reliability.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-400"></span> The Trinity Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6 leading-tight">
              Why Partner With <span className="text-gradient">Trinity Power</span>?
            </h3>
            <p className="text-gray-600 dark:text-light-100/70 mb-10 text-lg leading-relaxed">
              We go beyond just installing solar panels. We engineer comprehensive energy solutions tailored to maximize your return on investment while ensuring the highest standards of safety and quality.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-navy-800 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 dark:text-white mb-2">{reason.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-light-100/60 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1588508492080-60b54020a324?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Panel Installation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-navy-800/95 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-light-100/60 mb-1">Customer Satisfaction</p>
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-heading font-bold text-navy-900 dark:text-white">4.9/5</span>
                      <div className="flex text-gold-500">
                        {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-gold-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
