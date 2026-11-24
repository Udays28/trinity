import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/916232797337"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[90] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
