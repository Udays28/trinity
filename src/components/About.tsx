import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Lightbulb, Leaf } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Engineering Excellence' },
  { icon: Users, title: 'Integrity' },
  { icon: Lightbulb, title: 'Innovation' },
  { icon: Target, title: 'Customer First' },
  { icon: Leaf, title: 'Sustainability' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image & Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Panel Engineers" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-white/30 dark:bg-navy-900/30"></div>
            </div>
            
            {/* Timeline Overlay */}
            <div className="absolute -bottom-10 -right-10 lg:bottom-10 lg:-right-20 glass-panel p-8 rounded-2xl max-w-xs shadow-2xl">
              <div className="border-l-2 border-gold-500 pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-gold-500 -left-[9px] top-0 shadow-[0_0_15px_rgba(255,193,7,0.5)]"></div>
                <h4 className="font-heading font-bold text-2xl text-navy-900 dark:text-white mb-1">Founded 2026</h4>
                <p className="text-sm text-gray-600 dark:text-light-100/70 mb-6">Established with a vision to revolutionize solar energy.</p>
                
                <div className="absolute w-4 h-4 rounded-full bg-gold-500 -left-[9px] bottom-0 shadow-[0_0_15px_rgba(255,193,7,0.5)]"></div>
                <h4 className="font-heading font-bold text-2xl text-navy-900 dark:text-white mb-1">Headquartered</h4>
                <p className="text-sm text-gray-600 dark:text-light-100/70">2nd Floor, Prem Tower,<br/>Near Nakshatra Garden,<br/>Shivpuri, MP</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-400"></span> About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6 leading-tight">
              Leading the Transition to <span className="text-gradient">Renewable Energy</span>
            </h3>
            
            <p className="text-gray-600/80 mb-10 leading-relaxed">
              Trinity Power is a premier Solar EPC company dedicated to delivering high-performance, 
              scalable solar energy solutions across India. We believe in engineering excellence and 
              sustainable growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="glass-panel p-6 rounded-xl border-t border-t-gold-500/30">
                <Target className="w-10 h-10 text-gold-600 mb-4" />
                <h4 className="font-heading font-bold text-xl text-navy-900 dark:text-white mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600 dark:text-light-100/70">
                  To provide accessible, reliable, and innovative solar solutions that empower 
                  communities and businesses while protecting our environment.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-t border-t-gold-500/30">
                <Eye className="w-10 h-10 text-gold-600 mb-4" />
                <h4 className="font-heading font-bold text-xl text-navy-900 dark:text-white mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 dark:text-light-100/70">
                  To be the most trusted and preferred Solar EPC partner in India, known for 
                  quality, transparency, and technological advancement.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-2xl text-navy-900 dark:text-white mb-6">Core Values</h4>
              <div className="flex flex-wrap gap-3">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 px-4 py-2 rounded-full">
                      <Icon className="w-4 h-4 text-gold-600" />
                      <span className="text-sm font-medium text-gray-600 dark:text-light-100/70">{val.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
