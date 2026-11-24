import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, Calendar } from 'lucide-react';

const news = [
  {
    date: 'July 12, 2026',
    title: 'India surpasses 100GW Solar Capacity Milestone',
    excerpt: 'The nation achieves a historic milestone in renewable energy, driven by utility-scale projects and supportive government policies.',
    content: 'India has officially surpassed the 100GW mark in installed solar capacity, a monumental achievement in its journey towards sustainable energy. This rapid growth is largely attributed to large-scale solar parks, favorable government initiatives like the PM-KUSUM scheme, and increasing adoption of rooftop solar by commercial and industrial sectors. Trinity Power is proud to have contributed significantly to this milestone with over 150MW of commissioned projects in the last fiscal year.',
    image: 'https://images.unsplash.com/photo-1509391366360-12009cb8d9e6?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'June 28, 2026',
    title: 'Trinity Power Wins "Best EPC Partner" Award',
    excerpt: 'Recognized for engineering excellence and quality standards at the Annual Renewable Energy Summit 2026.',
    content: 'At the prestigious Annual Renewable Energy Summit held in New Delhi, Trinity Power was honored with the "Best EPC Partner" award. The recognition highlights our unwavering commitment to engineering excellence, safety standards, and timely project delivery. Our recent completion of a complex 25MW floating solar project was specifically commended for its innovative mooring design and minimal environmental impact.',
    image: 'https://images.unsplash.com/photo-1559302504-20a5bb01004a?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'June 15, 2026',
    title: 'New Efficiency Records for Bifacial Solar Panels',
    excerpt: 'Latest advancements in bifacial technology show up to 15% increase in energy yield for commercial installations.',
    content: 'Recent studies on the latest generation of bifacial solar modules demonstrate a significant leap in efficiency. By capturing reflected sunlight from the rear side, these panels are showing up to a 15% higher energy yield compared to traditional monofacial panels, especially in commercial flat-roof and ground-mounted installations. Trinity Power has already integrated these high-efficiency modules into our standard offering, ensuring maximum ROI for our clients.',
    image: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);

  return (
    <section id="news" className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-400"></span> Industry Insights
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white">
              Latest <span className="font-black text-gold-500">News</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-gray-50 dark:bg-navy-800 border border-navy-900/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/50 transition-all cursor-pointer flex flex-col"
              onClick={() => setSelectedNews(item)}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-600 mb-3">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h4 className="font-bold text-lg text-navy-900 dark:text-white mb-3 line-clamp-2">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-light-100/60 mb-6 flex-1 line-clamp-3">{item.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-navy-900 dark:text-white text-[12px] font-bold uppercase tracking-widest group-hover:text-gold-600 transition-colors">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
              onClick={() => setSelectedNews(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-navy-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-48 sm:h-64 shrink-0 relative">
                <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-navy-900 to-transparent opacity-50"></div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  {selectedNews.date}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 dark:text-white mb-6">
                  {selectedNews.title}
                </h3>
                <div className="prose prose-sm sm:prose-base prose-gray max-w-none text-gray-600 dark:text-light-100/70 leading-relaxed">
                  <p>{selectedNews.content}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
