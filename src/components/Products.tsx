import { motion } from 'motion/react';
import { SunMedium, Zap, Settings, ShieldCheck } from 'lucide-react';

const categories = [
  {
    icon: SunMedium,
    title: 'Solar Panels',
    brands: ['Adani', 'Waaree', 'Rayzon', 'Premier'],
    desc: 'High-efficiency monocrystalline and bifacial modules for maximum yield.'
  },
  {
    icon: Zap,
    title: 'Inverters',
    brands: ['Polycab', 'Havells', 'Sungrow', 'Solex'],
    desc: 'Smart string and central inverters with advanced grid management.'
  },
  {
    icon: Settings,
    title: 'Cables & Wiring',
    brands: ['Polycab', 'KEI', 'RR Kabel'],
    desc: 'UV-resistant, weather-proof DC and AC cables ensuring zero power loss.'
  },
  {
    icon: ShieldCheck,
    title: 'Mounting Structures',
    brands: ['Poka-Yoke Technology', 'Custom Design'],
    desc: 'Aerodynamic, wind-resistant, hot-dip galvanized mounting systems.'
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 justify-center flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-400"></span> Quality Assurance
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">
            Premium <span className="text-gradient">Components</span>
          </h3>
          <p className="text-gray-600 dark:text-light-100/70 max-w-2xl mx-auto">
            We partner with Tier-1 global and domestic manufacturers to ensure your solar plant performs optimally for 25+ years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-navy-900/5 dark:border-white/5 flex gap-6 hover:border-gold-500/30 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 border border-navy-900/10 dark:border-white/10 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                    <Icon className="w-8 h-8 text-gold-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-2xl text-navy-900 dark:text-white mb-3">{category.title}</h4>
                  <p className="text-gray-600 dark:text-light-100/70 text-sm mb-4 leading-relaxed">{category.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, i) => (
                      <span key={i} className="px-3 py-1 bg-white dark:bg-navy-900 border border-navy-900/10 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-light-100/70 font-medium">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
