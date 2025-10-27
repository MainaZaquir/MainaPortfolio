import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StaticImageData } from "next/image";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    problem: string;
    solution: string;
    impact: string;
    images: (string | StaticImageData)[];
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

export function ProjectModal({ isOpen, onClose, project }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} 
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} 
          >

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-500 mb-4">{project.description}</p>

            <div className="space-y-4">
              <img
                src={
                  typeof project.images[0] === "string"
                    ? project.images[0]
                    : (project.images[0] as any).src
                }
                alt={project.title}
                className="rounded-xl w-full object-cover"
              />
              <p className="text-gray-700 dark:text-gray-300">{project.longDescription}</p>

              <div>
                <h3 className="font-semibold text-lg mb-1">Problem</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Solution</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Impact</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.impact}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Technologies</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
