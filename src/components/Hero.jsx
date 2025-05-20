import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Adjusted background blur elements to use new palette if needed, or remove if too distracting */}
        {/* Example: using tertiary and secondary for blurs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-tertiary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <motion.p 
                className="text-lg md:text-xl text-primary font-medium" // Changed to primary color #FF6500
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Olá, eu sou
              </motion.p>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="gradient-text">Vinicius</span> {/* Gradient will use primary and secondary */}
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary mt-2" // Changed to secondary color #1E3E62
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                DevOps em formação | Especialista em Automatização e IA aplicada
              </motion.h2>
            </div>

            <motion.p 
              className="text-lg text-foreground/70 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Desenvolvo soluções com foco em integração contínua (CI/CD), deploy automatizado e inteligência artificial. <br />
              Tenho experiência prática com Docker, GitHub Actions, Azure, OpenAI API e construção de chatbots com recuperação de contexto (RAG). <br />
              Meus projetos priorizam automação, entrega rápida e documentação clara — tudo rodando em containers na nuvem.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button onClick={scrollToProjects} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Ver Projetos
              </Button>
              <Button onClick={scrollToContact} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Fale comigo
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a href="https://github.com/92username" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vinicius-rodrigues-9879b7145/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lvsr9663@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-secondary shadow-xl"> {/* Border to secondary */}
              <img  alt="Foto de perfil do desenvolvedor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1675495667069-d18d7d78eeb2" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-foreground/60 mb-2">Role para baixo</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-foreground/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
