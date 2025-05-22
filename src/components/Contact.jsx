import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />, // Icon to primary
      title: "Localização",
      details: "Rio de Janeiro, RJ, Brasil"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />, // Icon to primary
      title: "Telefone",
      details: "+55 (65) 99663-7888"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />, // Icon to primary
      title: "Email",
      details: "lvsr9663@gmail.com"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-secondary">Entre em Contato</h2> {/* Title to secondary */}
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div> {/* Accent line to primary */}
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            Tem um projeto em mente ou quer conversar? Preencha o formulário abaixo ou use um dos canais de contato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2 bg-tertiary p-8 rounded-lg shadow-xl border border-secondary/30" // Form background to tertiary, border to secondary
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <form
              action="https://formsubmit.co/lvsr9663@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://92username.github.io/meu-portifolio-site/#contact" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="contact-input bg-background/50 border-border focus:ring-primary focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="contact-input bg-background/50 border-border focus:ring-primary focus:border-primary"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Assunto
                </label>
                <input
                  id="subject"
                  name="_subject"
                  type="text"
                  required
                  className="contact-input bg-background/50 border-border focus:ring-primary focus:border-primary"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="contact-input bg-background/50 border-border focus:ring-primary focus:border-primary"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full gradient-bg text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 py-2 px-4 rounded"
                >
                  Enviar Mensagem ✉️
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-tertiary rounded-lg shadow-md border border-secondary/30" // Info card background to tertiary, border to secondary
                variants={fadeInUp}
              >
                {info.icon}
                <div>
                  <h3 className="text-lg font-semibold text-primary">{info.title}</h3> {/* Info title to primary */}
                  <p className="text-foreground/80">{info.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
