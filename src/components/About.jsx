import React from 'react';
import { motion } from 'framer-motion';
import { GitMerge, BrainCircuit, Server, Container, Users, Code, Palette, Lightbulb } from 'lucide-react'; // Added GitMerge, BrainCircuit, Server, Container

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: <GitMerge className="h-10 w-10 text-primary" />,
      title: "Automação DevOps",
      description: "Criação de pipelines CI/CD usando GitHub Actions, com deploy contínuo em ambientes Linux via Docker. Entregas mais rápidas, previsíveis e seguras."
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-secondary" />,
      title: "Integração com IA (RAG & APIs)",
      description: "Desenvolvimento de soluções com inteligência artificial usando LangChain, ChromaDB e OpenAI. Chatbots, FAQ dinâmico e geração de conteúdo inteligente."
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Testes, Deploy e Monitoramento",
      description: "Scripts e ambientes configurados com shell scripting, deploy em VPS com DNS próprio e SSL, além de integrações para logging e rastreabilidade."
    },
    {
      icon: <Container className="h-10 w-10 text-secondary" />,
      title: "Infraestrutura Containerizada",
      description: "Aplicações rodando em ambientes isolados com Docker, Docker Compose e redes internas. Facilidade de escalonamento, rollback e versionamento."
    }
  ];

  return (
    <section id="about" className="section-padding bg-tertiary/30"> {/* Changed background to tertiary with opacity */}
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-secondary">Sobre Mim</h2> {/* Title to secondary */}
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div> {/* Accent line to primary */}
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            Sou estudante de Engenharia de Software com foco em automação de processos com Python, pipelines CI/CD e deploy contínuo usando Docker e GitHub Actions.  
Desenvolvo soluções com RAG (Retrieval-Augmented Generation), integrando LangChain, ChromaDB e OpenAI para aplicações inteligentes e escaláveis.

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div> {/* Blur to primary */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-lg -z-10"></div> {/* Blur to secondary */}
            <div className="rounded-lg overflow-hidden border border-border shadow-lg">
              <img  alt="Desenvolvedor trabalhando" className="w-full h-auto" src="https://images.unsplash.com/photo-1607615896122-6c919f897e55" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-poppins text-secondary">Minha Jornada</h3> {/* Subtitle to secondary */}
            <p className="text-foreground/70">
              Estudo Engenharia de Software com foco prático em DevOps.  
              Trabalho com CI/CD usando GitHub Actions, containers Docker e automações Python.  
              Integro IA via RAG com LangChain e ChromaDB para criar sistemas inteligentes e prontos para produção.
            </p>
            <p className="text-foreground/70">
              Minha abordagem é guiada por princípios de escalabilidade, modularidade e automação contínua.

            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4 font-poppins text-secondary">Educação</h4> {/* Subtitle to secondary */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Engenharia de Software - Estácio</span>
                  <span className="text-foreground/60">2024 - 2028</span>
                </div>
                <div className="flex justify-between">
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-center mt-24 mb-12 font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Competências Práticas
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border card-hover"
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
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2 font-poppins">{service.title}</h4>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
