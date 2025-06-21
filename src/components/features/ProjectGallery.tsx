import React, { useState } from 'react';
import { ExternalLink, Eye, Code, Filter } from 'lucide-react';

interface ProjectGalleryProps {
  isVisible: boolean;
}

const projects = [
  {
    id: 1,
    title: "Customer Analytics Dashboard",
    category: "Data Science",
    student: "Rahul Kumar",
    image: "/lovable-uploads/4d5f52b0-fa00-4d76-9d01-59d6f5869392.png",
    description: "Interactive dashboard analyzing customer behavior patterns using Python and Tableau",
    tech: ["Python", "Pandas", "Tableau", "SQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    category: "Full-Stack",
    student: "Sneha Patel",
    image: "/lovable-uploads/c666a538-3fef-49f6-acdd-8138ed2a5d8b.png",
    description: "React Native app with Node.js backend for online shopping platform",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Market Research Tool",
    category: "Business Analytics",
    student: "Amit Singh",
    image: "/lovable-uploads/36d4714c-037b-4445-b8f2-a6e2cf1072c8.png",
    description: "Automated market analysis tool using web scraping and sentiment analysis",
    tech: ["Python", "BeautifulSoup", "NLP", "Power BI"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Sales Prediction Model",
    category: "Data Science",
    student: "Maya Sharma",
    image: "/lovable-uploads/b39d24d7-8495-406b-bbf5-61c113daf3c0.png",
    description: "Machine learning model predicting sales trends with 95% accuracy",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Task Management System",
    category: "Full-Stack",
    student: "Vikram Reddy",
    image: "/lovable-uploads/b3dec3b7-dd9e-4891-9ec9-c11e4d48db70.png",
    description: "Collaborative project management tool with real-time updates",
    tech: ["React", "Firebase", "Material-UI", "Socket.io"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Financial Risk Assessment",
    category: "Business Analytics",
    student: "Deepika Joshi",
    image: "/lovable-uploads/adfbf806-8339-422c-aa13-e40234e46fdd.png",
    description: "Risk analysis dashboard for investment portfolio management",
    tech: ["R", "Shiny", "ggplot2", "Excel"],
    color: "from-teal-500 to-blue-500"
  }
];

const categories = ["All", "Data Science", "Full-Stack", "Business Analytics"];

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ isVisible }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxProject, setLightboxProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h3 className={`text-3xl font-bold text-white mb-4 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          Student Project Gallery
        </h3>
        <p className={`text-slate-300 max-w-2xl mx-auto ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.2s' }}>
          Discover amazing projects built by our students during their learning journey
        </p>
      </div>

      {/* Category Filter */}
      <div className={`flex justify-center mb-8 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`} style={{ animationDelay: '0.3s' }}>
        <div className="bg-slate-800/50 rounded-lg p-2 backdrop-blur-sm border border-slate-700/50 flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 ml-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setLightboxProject(project)}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                  <Code className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>

              {/* Category Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-medium text-white shadow-lg`}>
                {project.category}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-blue-400 mb-3">by {project.student}</p>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl animate-scale-in">
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-96">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${lightboxProject.color} rounded-full text-xs font-medium text-white mb-4`}>
                  {lightboxProject.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{lightboxProject.title}</h3>
                <p className="text-blue-400 mb-4">by {lightboxProject.student}</p>
                <p className="text-slate-300 mb-6 leading-relaxed">{lightboxProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lightboxProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-md border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300">
                    View Live Demo
                  </button>
                  <button className="flex-1 py-3 border border-slate-600 text-slate-300 font-medium rounded-lg hover:bg-slate-800 transition-colors duration-300">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
