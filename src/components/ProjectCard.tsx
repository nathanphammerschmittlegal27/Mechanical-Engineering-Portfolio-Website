import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
export interface Project {
  id: string;
  title: string;
  category: string | string[];
  description: string;
  imageUrl: string;
}
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({
  project
}: ProjectCardProps) {
  return <Link to={`/project/${project.id}`}>
      <motion.div layout initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0.95
    }} transition={{
      duration: 0.3
    }} className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="aspect-[4/3.2] overflow-hidden bg-gray-100">
          <img src={project.imageUrl} alt={project.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.title === 'Design Sketching' ? 'object-left' : ''}`} />
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              {Array.isArray(project.category) ? project.category.join(' • ') : project.category}
            </span>
            <Plus className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
            {project.title}
          </h3>
        </div>
      </motion.div>
    </Link>;
}