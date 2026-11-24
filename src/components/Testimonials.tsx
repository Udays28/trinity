import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Indore',
    content: 'Trinity Power made our transition to solar incredibly smooth. The team was professional, the installation was completed on time, and our electricity bill has dropped by 95%. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Factory Owner, Bhopal',
    content: 'We installed a 100kW system for our manufacturing unit. The ROI calculation provided by Trinity was spot on. Their after-sales service and maintenance support are exceptional.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'School Principal, Gwalior',
    content: 'Our institution chose Trinity Power for a 50kW rooftop project. The engineers were knowledgeable and ensured safety protocols were strictly followed. It is a great learning asset for our students now.',
    rating: 4,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 justify-center flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-400"></span> Client Success
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h3>
          <p className="text-gray-600 dark:text-light-100/70 max-w-2xl mx-auto">
            Real stories from homeowners and businesses who have made the switch to sustainable energy with Trinity Power.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-navy-900/5 dark:border-white/5 shadow-sm relative group hover:border-gold-500/30 transition-all hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-100 dark:text-white/10 group-hover:text-gold-500/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testi.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-light-100/70 leading-relaxed mb-8 relative z-10">
                "{testi.content}"
              </p>
              <div>
                <h4 className="font-bold text-navy-900 dark:text-white">{testi.name}</h4>
                <p className="text-xs text-gray-500 dark:text-light-100/60">{testi.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
