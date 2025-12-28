import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Portfolio. Designed with precision.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>;
}