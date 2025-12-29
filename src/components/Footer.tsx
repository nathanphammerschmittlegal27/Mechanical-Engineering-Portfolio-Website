import { Mail, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nathan Hammerschmitt Le Gal.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="mailto:nathan.p.hammerschmitt.le.gal.27@dartmouth.edu" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nathan-hammerschmitt-le-gal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>;
}