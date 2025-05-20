import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "RAG com LangChain e ChromaDB",
      description: "Chatbot com recuperação de contexto e documentação estruturada, utilizando LangChain e ChromaDB.",
      image: "langchain", // se quiser trocar, personalize depois
      category: "ia",
      tags: ["LangChain", "ChromaDB", "RAG"],
      demoLink: "https://estudamais.tamanduas.dev/",
      githubLink: "https://github.com/92username/langchain-quickstart"
    },
    {
      id: 2,
      title: "Deploy Automático com GitHub Actions",
      description: "Tutorial completo de CI/CD com Docker, GitHub Actions, build e deploy automatizado.",
      image: "ci-cd",
      category: "devops",
      tags: ["CI/CD", "GitHub Actions", "Docker"],
      demoLink: "https://github.com/92username/CI-CD-tutorial-completo",
      githubLink: "https://github.com/92username/CI-CD-tutorial-completo"
    },
    {
      id: 3,
      title: "Gerador de Exercícios com ChatGPT",
      description: "Aplicação com IA que gera listas de exercícios com base em tema, linguagem e dificuldade.",
      image: "chatbox",
      category: "ia",
      tags: ["OpenAI", "Python", "Streamlit"],
      demoLink: "https://chatbox.tamanduas.dev/",
      githubLink: "https://github.com/92username/learn-chatbox-gpt"
    },
    {
      id: 4,
      title: "AI Resume Optimizer (ATS)",
      description: "Ferramenta que gera currículos otimizados para sistemas ATS com base em IA.",
      image: "ats",
      category: "ia",
      tags: ["OpenAI", "NLP", "ATS"],
      demoLink: "https://resume.tamanduas.dev/",
      githubLink: "https://github.com/92username/ai-resume-optimizer"
    },
    {
      id: 5,
      title: "Desafio Lacrei DevSecOps",
      description: "Pipeline com foco em segurança, usando ZAP, secrets scanning e GitHub Actions.",
      image: "devsecops",
      category: "devops",
      tags: ["DevSecOps", "GitHub Actions", "OWASP ZAP"],
      demoLink: "https://github.com/92username/desafio-lacrei-saude-devops",
      githubLink: "https://github.com/92username/desafio-lacrei-saude-devops"
    },
    {
      id: 6,
      title: "Script de Instalação Linux",
      description: "Shell script automatizado para setup de apps e ambientes em distribuições baseadas em Debian.",
      image: "bash-setup",
      category: "automacao",
      tags: ["Bash", "Automação", "Linux"],
      demoLink: "https://github.com/92username/script-instalacao_apps",
      githubLink: "https://github.com/92username/script-instalacao_apps"
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'devops', label: 'DevOps' },
    { id: 'ia', label: 'IA' },
    { id: 'automacao', label: 'Automação' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-secondary">Meus Projetos</h2> {/* Title to secondary */}
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div> {/* Accent line to primary */}
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            Confira alguns dos meus trabalhos recentes. Cada projeto é único e desenvolvido com atenção aos detalhes.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {filters.map((filter, index) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`${activeFilter === filter.id ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group bg-tertiary rounded-lg overflow-hidden shadow-lg card-hover border border-secondary/50" // Card background to tertiary, border to secondary
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img  alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1642132652860-471b4228023e" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {/* Overlay content can be styled with primary/secondary for accents if needed */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/90 transition-colors">{project.title}</h3> {/* Title to primary */}
                <p className="text-sm text-foreground/70 mb-4 h-16 overflow-hidden">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border/20">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Ver Demo <ExternalLink size={16} className="ml-1.5" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
