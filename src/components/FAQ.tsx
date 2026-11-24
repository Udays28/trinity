import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How much space is required for a solar panel installation?',
    answer: 'On average, you need about 100 square feet of shadow-free roof space per kilowatt (kW) of solar panels. For a typical 3kW residential system, you would need roughly 300 square feet.'
  },
  {
    question: 'What is the lifespan of a solar power system?',
    answer: 'High-quality solar panels generally last 25-30 years with minimal degradation. Inverters usually need replacement every 10-15 years, while batteries (if off-grid/hybrid) last 5-10 years depending on the type.'
  },
  {
    question: 'Do solar panels work during cloudy days or power cuts?',
    answer: 'Solar panels still generate power on cloudy days, though at a reduced efficiency (about 10-25% of normal capacity). During a grid power cut, grid-tied systems will shut down for safety unless you have a hybrid system with battery backup.'
  },
  {
    question: 'Are there any subsidies available for solar installations?',
    answer: 'Yes, the government offers various subsidies under schemes like PM-KUSUM and National Portal for Rooftop Solar for residential installations. Our team assists you with the complete documentation to claim these subsidies seamlessly.'
  },
  {
    question: 'How long does the installation process take?',
    answer: 'A standard residential installation typically takes 2-3 days once the site survey and approvals are complete. The entire process from initial consultation to final commissioning usually takes 2-4 weeks.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 justify-center flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-400"></span> Knowledge Base
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`border rounded-xl transition-all ${isOpen ? 'border-gold-500/50 bg-gray-50 dark:bg-navy-800' : 'border-gray-200 bg-white dark:bg-navy-900'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-navy-900 dark:text-white pr-8">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-light-100/40 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 dark:text-light-100/70 text-sm leading-relaxed border-t border-gray-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
