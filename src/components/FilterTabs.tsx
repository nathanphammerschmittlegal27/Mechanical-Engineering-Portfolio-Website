import { motion } from 'framer-motion';
interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}
export function FilterTabs({
  categories,
  activeCategory,
  onSelectCategory
}: FilterTabsProps) {
  return <div className="flex justify-center mb-12 px-4 sticky top-20 z-40">
      <div className="bg-gray-100/60 backdrop-blur-sm p-1 rounded-full inline-flex space-x-1 shadow-lg border border-gray-200/40 hover:scale-[1.01] transition-transform duration-200">
        {categories.map(category => <button key={category} onClick={() => onSelectCategory(category)} className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
            {activeCategory === category && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-full shadow-md border border-gray-200/50" transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6
        }} />}
            <span className="relative z-10">{category}</span>
          </button>)}
      </div>
    </div>;
}