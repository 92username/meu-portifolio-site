import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Added import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/92username" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/vinicius-rodrigues-9879b7145/" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/vinicius92k/" },
    { icon: <Mail size={20} />, url: "mailto:lvsr9663@gmail.com" }
  ];

  const quickLinks = [
    { name: "Início", url: "#home" },
    { name: "Sobre", url: "#about" },
    { name: "Projetos", url: "#projects" },
    { name: "Habilidades", url: "#skills" },
    { name: "Contato", url: "#contact" }
  ];

  return (
    <footer className="bg-tertiary pt-16 pb-8"> {/* Footer background to tertiary */}
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text font-poppins">Meu Portfólio</h3> {/* Gradient text uses primary and secondary */}
            <p className="text-foreground/70">
              Criando experiências digitais excepcionais com design moderno e código limpo.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors border border-secondary/50"
                  aria-label={`Link para ${link.url.split('/').pop()}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins text-secondary">Links Rápidos</h3> {/* Title to secondary */}
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins text-secondary">Newsletter</h3> {/* Title to secondary */}
            <p className="text-foreground/70 mb-4">
              Receba atualizações sobre meus últimos projetos e artigos.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-grow p-2.5 rounded-md bg-background/50 border border-border focus:ring-primary focus:border-primary text-sm"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Inscrever
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Vinicius. Todos os direitos reservados.
          </p>
          <p className="text-xs text-foreground/50 mt-1">
            Desenvolvido com <span className="text-primary">❤</span> e React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
