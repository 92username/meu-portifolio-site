import React from 'react';
import { motion } from 'framer-motion';

// Sugestão de função utilitária a ser criada:
const renderStars = (level) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={i <= level ? "#fb923c" : "#1e293b"} // laranja para preenchida, escuro para vazia
        className="w-5 h-5 inline-block mx-0.5"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.686a1 1 0 00.95.69h3.881c.969 0 1.371 1.24.588 1.81l-3.14 2.28a1 1 0 00-.364 1.118l1.2 3.686c.3.921-.755 1.688-1.538 1.118l-3.14-2.28a1 1 0 00-1.176 0l-3.14 2.28c-.783.57-1.838-.197-1.538-1.118l1.2-3.686a1 1 0 00-.364-1.118L2.43 9.113c-.783-.57-.38-1.81.588-1.81h3.88a1 1 0 00.951-.69l1.2-3.686z" />
      </svg>
    );
  }
  return stars;
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 3 },
        { name: "Flask", level: 1 },
        { name: "FastAPI", level: 1 },
        { name: "SQL (SQLite/PostgreSQL)", level: 2 },
        { name: "REST API", level: 3 },
        { name: "Docker / Docker Compose", level: 4 },
      ]
    },
    {
      title: "🚀 DevOps & Infraestrutura",
      skills: [
        { name: "Git/GitHub", level: 4 },
        { name: "Bash Scripting", level: 3 },
        { name: "Nginx (proxy reverso + SSL)", level: 2 },
        { name: "Prometheus + Grafana", level: 1 },
        { name: "Linux (.deb Distros)", level: 4 },
        { name: "VPS / Deploy com Docker", level: 4 },
      ]
    },
    {
      title: "🧠 IA & NLP",
      skills: [
        { name: "Langchain + ChromaDB (RAG)", level: 2 },
        { name: "OpenAI API", level: 3 },
        { name: "Prompt Engineering", level: 3 },
      ]
    },
    {
      title: "🛠️ Outros",
      skills: [
        { name: "Markdown / Documentação GitHub", level: 4 },
        { name: "Figma / Canva", level: 2 },
        { name: "Inglês (conversacional, leitura e escrita)", level: 4 },
        { name: "Organização com GitHub Projects e Issues", level: 3 },
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-tertiary/30"> {/* Background to tertiary with opacity */}
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-secondary">Minhas Habilidades</h2> {/* Title to secondary */}
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div> {/* Accent line to primary */}
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            Estas são as tecnologias e ferramentas com as quais trabalho para criar soluções digitais excepcionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6 bg-tertiary p-6 rounded-lg shadow-md border border-secondary/30" // Card background to tertiary, border to secondary
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
                    delay: categoryIndex * 0.1
                  }
                }
              }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4 font-poppins">{category.title}</h3> {/* Category title to primary */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-1 items-center"> {/* Added items-center */}
                      <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                      <div className="flex">{renderStars(skill.level)}</div> {/* Replaced percentage with stars */}
                    </div>
                    {/* Removed progress bar div */}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proposta da Escala */}
        <div className="mt-16 bg-tertiary p-6 rounded-lg shadow-md border border-secondary/30">
          <h3 className="text-xl font-semibold text-primary mb-4 font-poppins flex items-center">
            <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.686a1 1 0 00.95.69h3.881c.969 0 1.371 1.24.588 1.81l-3.14 2.28a1 1 0 00-.364 1.118l1.2 3.686c.3.921-.755 1.688-1.538 1.118l-3.14-2.28a1 1 0 00-1.176 0l-3.14 2.28c-.783.57-1.838-.197-1.538-1.118l1.2-3.686a1 1 0 00-.364-1.118L2.43 9.113c-.783-.57-.38-1.81.588-1.81h3.88a1 1 0 00.951-.69l1.2-3.686z" />
            </svg>
            Proposta da Escala
          </h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left text-foreground/90">
              <thead className="text-sm text-foreground/70 border-b border-secondary/20">
                <tr>
                  <th className="py-2 pr-4">Estrelas</th>
                  <th className="py-2 pr-4">Nível</th>
                  <th className="py-2">Descrição curta</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-secondary/10">
                  <td className="py-2 pr-4">
                    <div className="flex">{renderStars(1)}</div>
                  </td>
                  <td className="py-2 pr-4">Iniciante</td>
                  <td className="py-2">Já ouvi falar / testei algo muito superficial.</td>
                </tr>
                <tr className="border-b border-secondary/10">
                  <td className="py-2 pr-4"><div className="flex">{renderStars(2)}</div></td>
                  <td className="py-2 pr-4">Básico</td>
                  <td className="py-2">Já usei em algum projeto, mas ainda dependo de tutoriais.</td>
                </tr>
                <tr className="border-b border-secondary/10">
                  <td className="py-2 pr-4"><div className="flex">{renderStars(3)}</div></td>
                  <td className="py-2 pr-4">Intermediário</td>
                  <td className="py-2">Uso com certa autonomia e entendo bem a ferramenta.</td>
                </tr>
                <tr className="border-b border-secondary/10">
                  <td className="py-2 pr-4"><div className="flex">{renderStars(4)}</div></td>
                  <td className="py-2 pr-4">Avançado</td>
                  <td className="py-2">Resolvo erros, entendo arquitetura, trabalho com confiança.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4"><div className="flex">{renderStars(5)}</div></td>
                  <td className="py-2 pr-4">Proficiente</td>
                  <td className="py-2">Domino, ensino, otimizo — <em>nível referência.</em> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
