import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-400"></span> Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white mb-6">
              Start Your <span className="text-gradient">Solar Journey</span>
            </h3>
            <p className="text-gray-600 dark:text-light-100/70 mb-10 text-lg">
              Ready to transition to clean energy? Contact our experts for a free consultation and personalized solar quote.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-navy-800 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-navy-900 dark:text-white font-bold mb-1">Headquarters</h4>
                  <p className="text-gray-600 dark:text-light-100/70 text-sm leading-relaxed mb-2">
                    2nd Floor, Prem Tower,<br />
                    Near Nakshatra Garden,<br />
                    Shivpuri, Madhya Pradesh
                  </p>
                  <p className="text-gray-600 dark:text-light-100/70 text-sm font-semibold">
                    GSTIN: 23AANCT3195P1ZL
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-navy-800 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-navy-900 dark:text-white font-bold mb-1">Call Us</h4>
                  <p className="text-gray-600 dark:text-light-100/70 text-sm">
                    +91 70001 42494<br />
                    +91 91797 07337<br />
                    +91 62648 66452
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-navy-800 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-navy-900 dark:text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-light-100/70 text-sm">
                    info@trinitypower.in
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-panel p-8 rounded-3xl border border-navy-900/10 dark:border-white/10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-light-100/70 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white/50 dark:bg-navy-900/50 border border-navy-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-light-100/70 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white/50 dark:bg-navy-900/50 border border-navy-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 dark:text-light-100/70 mb-2">Project Type</label>
                <select className="w-full bg-white/50 dark:bg-navy-900/50 border border-navy-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="industrial">Industrial Solar</option>
                  <option value="government">Government/Institutional</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 dark:text-light-100/70 mb-2">Location (City/State)</label>
                <input type="text" className="w-full bg-white/50 dark:bg-navy-900/50 border border-navy-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="e.g. Shivpuri, MP" />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-600 dark:text-light-100/70 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/50 dark:bg-navy-900/50 border border-navy-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Tell us about your energy requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 dark:text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                Submit Request <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
