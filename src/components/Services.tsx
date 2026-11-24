import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Factory, Building2, Sun, GraduationCap, Landmark, ArrowRight, X } from 'lucide-react';

const services = [
  { icon: Home, title: 'Residential Solar', desc: 'Custom solar solutions (On-grid, Off-grid, Hybrid) for homes reducing your electricity bills to zero.', fullDesc: 'Our residential solar solutions are designed to blend seamlessly with your roof while maximizing energy production. We offer On-grid, Off-grid, and Hybrid systems tailored to your needs. We handle everything from site assessment and custom engineering to permitting and grid interconnection. With smart monitoring, you can track your energy savings in real-time.' },
  { icon: Building2, title: 'Commercial Solar', desc: 'Scalable energy systems for offices, malls, and commercial complexes.', fullDesc: 'Commercial entities can significantly reduce operational costs and showcase their commitment to sustainability. We provide high-efficiency solar carports, rooftop systems, and BIPV (Building Integrated Photovoltaics) tailored to commercial energy consumption patterns.' },
  { icon: Factory, title: 'Industrial Solar', desc: 'Heavy-duty installations for manufacturing units and factories.', fullDesc: 'Industries with high power demand can benefit immensely from our robust solar installations. Our industrial-grade components and intelligent microgrids ensure uninterrupted power supply, reduce dependence on diesel generators, and lower the Levelized Cost of Energy (LCOE).' },
  { icon: Sun, title: 'Ground Mounted', desc: 'Utility-scale solar farms for maximum energy generation.', fullDesc: 'For businesses with unused land, ground-mounted solar farms offer the highest energy yield. We specialize in fixed-tilt and single/dual-axis tracker systems, optimizing panel orientation for maximum sun exposure and energy generation throughout the day.' },
  { icon: GraduationCap, title: 'Institutional Solar', desc: 'Sustainable energy for schools, colleges, and universities.', fullDesc: 'Educational institutions can lead by example. Our institutional solar projects not only power campuses cleanly but also serve as live educational models for students. We offer flexible financing models suitable for non-profit and educational budgets.' },
  { icon: Landmark, title: 'Government Projects', desc: 'Partnering in national renewable energy initiatives and public infrastructure.', fullDesc: 'As an approved EPC partner, we execute large-scale government and public sector projects with stringent compliance to national standards. From public building rooftops to solar street lighting networks, we help governments achieve their renewable energy targets.' },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-navy-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 justify-center flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-400"></span> Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">
            Comprehensive <span className="text-gradient">Solar Solutions</span>
          </h3>
          <p className="text-gray-600 dark:text-light-100/70 max-w-2xl mx-auto">
            End-to-end solar EPC services tailored to your specific energy requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-navy-900/5 dark:bg-white/5 p-6 rounded-2xl border border-navy-900/10 dark:border-white/10 hover:border-gold-500/50 hover:scale-[1.03] hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 flex flex-col gap-4 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900/10 dark:bg-white/10 flex items-center justify-center mb-1 text-navy-900 dark:text-white group-hover:bg-gold-500/20 group-hover:text-gold-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h4 className="font-bold text-base text-navy-900 dark:text-white">
                  {service.title}
                </h4>
                
                <p className="text-[12px] text-navy-900/50 dark:text-white/50 leading-relaxed flex-1">
                  {service.desc}
                </p>
                
                <div className="inline-flex items-center gap-2 text-gold-600 text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all mt-2">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-navy-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] p-8"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 dark:text-light-100/70 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-navy-900/5 dark:bg-white/5 flex items-center justify-center mb-6 text-gold-600">
                {selectedService.icon && <selectedService.icon className="w-8 h-8" />}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-navy-900 dark:text-white mb-4">
                {selectedService.title}
              </h3>
              
              <div className="text-gray-600 dark:text-light-100/70 leading-relaxed text-sm">
                <p>{selectedService.fullDesc}</p>
              </div>
              
              <button
                onClick={() => {
                  setSelectedService(null);
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
                className="mt-8 w-full bg-gold-500 hover:bg-gold-400 text-navy-900 dark:text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors"
              >
                Get a Quote
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
