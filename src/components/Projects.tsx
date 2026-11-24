import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Adani Green Energy Park',
    category: 'Utility Scale',
    capacity: '150 MW',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    title: 'TechHub Rooftop',
    category: 'Commercial',
    capacity: '500 kW',
    image: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Eco Manufacturing',
    category: 'Industrial',
    capacity: '2.5 MW',
    image: 'https://images.unsplash.com/photo-1559302504-20a5bb01004a?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'City Hospital',
    category: 'Healthcare',
    capacity: '300 kW',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Green Valley School',
    category: 'Institutional',
    capacity: '150 kW',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-400"></span> Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white">
              Featured <span className="font-black text-gold-500">Installations</span>
            </h3>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-navy-900 dark:text-white hover:text-gold-600 transition-colors font-medium">
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${project.span}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-navy-900/90 via-white/40 dark:via-navy-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-600 text-xs font-semibold rounded-full mb-3 backdrop-blur-md border border-gold-500/30">
                  {project.category}
                </span>
                <h4 className="font-heading font-bold text-2xl text-navy-900 dark:text-white mb-1">{project.title}</h4>
                <p className="text-gray-600 dark:text-light-100/70 text-sm font-medium">Capacity: {project.capacity}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
