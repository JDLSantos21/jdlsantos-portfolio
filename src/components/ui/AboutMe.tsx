"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Github,
  Linkedin,
  Copy,
  Send,
  Lightbulb,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { toast, Toaster } from "sonner";

const funFacts = [
  "Escribí mi primera línea de código a los 16 años",
  "Amo las peliculas tanto como el código",
  "Mi lenguaje favorito es TypeScript",
  "Mi IDE favorito es VS Code",
];

const FloatingEmojis = () => {
  const emojis = ["😊", "🚀", "💻", "🌈", "🎉", "🔥", "💎", "✨"];

  // Genera animaciones de movimiento para los emojis
  const generateRandomPosition = () => {
    const x =
      Math.random() * (window.innerWidth * 1.2) - window.innerWidth * 0.6;
    const y =
      Math.random() * (window.innerHeight * 1.2) - window.innerHeight * 0.6;
    return { x, y };
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {emojis.map((emoji, index) => (
        <motion.span
          key={index}
          className="absolute text-4xl"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
          animate={{
            x: generateRandomPosition().x,
            y: generateRandomPosition().y,
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
};

const AboutMe: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);

  const [text] = useTypewriter({
    words: [
      "desarrollador",
      "ingeniero de software",
      "full stack developer",
      "apasionado por la técnología",
      "solucionador de problemas",
      "react developer",
    ],
    loop: 0,
  });

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % funFacts.length);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("JDLSantos21@hotmail.com");
    toast.success("Email copiado al portapapeles");
  };

  const sendEmail = () => {
    window.location.href = "mailto:JDLSantos21@hotmail.com";
  };

  const openGithub = () => {
    window.open("https://github.com/JDLSantos21", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://linkedin.com/in/JDLSantos21", "_blank");
  };

  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <Card className="bg-transparent shadow-none border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              <motion.h2 className="text-2xl about-me-title font-bold text-blue-600 flex items-center justify-center sm:justify-start">
                <User className="w-6 h-6 mr-2" />
                Sobre Mí
              </motion.h2>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Avatar className="w-32 h-32 border-2 border-blue-200">
                    <AvatarImage
                      src="/assets/avatar/greet.webp"
                      className="profile-photo"
                      alt="Profile photo"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="text-center sm:text-left">
                  <motion.h1
                    className="text-3xl font-bold text-gray-900 dark:text-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Jose A. De Los Santos
                  </motion.h1>
                  <motion.p
                    className="mt-2 text-gray-600 dark:text-gray-200 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    24 años
                  </motion.p>
                  <motion.p
                    className="mt-2 text-gray-600 dark:text-gray-200 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Soy un{" "}
                    <span className="text-blue-600 font-semibold">{text}</span>
                    <Cursor cursorStyle="_" />
                  </motion.p>
                </div>
              </div>

              <motion.div
                className="text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="mb-4">
                  Mi nombre es{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Jose Armando De Los Santos Amadis
                  </span>
                  , desde que tengo memoria, he estado fascinado con la
                  técnología pero en 2017 con 16 años fue cuando descubrí mi
                  verdadera pasión: el{" "}
                  <span className="font-semibold">desarrollo de software</span>.
                  Desde entonces, he estado inmerso en el mundo del código,
                  aprendiendo y creciendo como desarrollador.
                </p>
                <p className="mb-4">
                  En 2020, tomé la decisión de formalizar mis conocimientos y me
                  inscribí en la carrera de{" "}
                  <span className="font-semibold ">Ingeniería de Software</span>{" "}
                  en la <span className="font-semibold">Universidad APEC</span>.
                  Esta experiencia académica más que aprender programación me ha
                  proporcionado una base sólida en{" "}
                  <span className="italic font-medium text-gray-800 dark:text-gray-300">
                    principios de ingeniería, metodologías de desarrollo y
                    gestión de proyectos de software
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Entre mis principales logros se encuentra el desarrollo de{" "}
                  <span className="font-semibold">
                    aplicaciones web y de escritorio
                  </span>{" "}
                  que han incrementado significativamente la productividad
                  empresarial , así como{" "}
                  <span className="font-semibold">aplicaciones móviles</span>{" "}
                  que han optimizado la experiencia del usuario final mediante
                  la automatización de procesos internos . Me enorgullece haber{" "}
                  <span className="font-semibold ">liderado proyectos</span> que
                  trascienden los requisitos técnicos para generar un impacto
                  real en la vida de los usuarios .
                </p>
              </motion.div>

              <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 p-4 rounded-2xl border border-blue-100 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-400/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full transform -translate-x-12 translate-y-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mr-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Lightbulb className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-400">
                      Dato Curioso
                    </h3>
                  </div>

                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-6 lg:text-lg leading-relaxed"
                    key={currentFact}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {funFacts[currentFact]}
                  </motion.p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={nextFact}
                      className="group bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span className="mr-2">Siguiente dato</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full transform translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-slate-400/10 to-blue-400/10 rounded-full transform -translate-x-16 translate-y-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                      ¡Conectemos!
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="text-2xl"
                    >
                      👋
                    </motion.div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    ¿Tienes un proyecto en mente? ¿Quieres colaborar o
                    simplemente charlar sobre tecnología?
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 h-12 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        onClick={copyEmail}
                      >
                        <Mail className="h-4 w-4" />
                        <span className="hidden sm:inline">Copiar email</span>
                        <span className="sm:hidden">Email</span>
                        <Copy className="h-3 w-3" />
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 h-12 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        onClick={sendEmail}
                      >
                        <Send className="h-4 w-4" />
                        <span className="hidden sm:inline">Enviar email</span>
                        <span className="sm:hidden">Enviar</span>
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 h-12 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                        onClick={openGithub}
                      >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">GitHub</span>
                        <span className="sm:hidden">GitHub</span>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 h-12 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        onClick={openLinkedin}
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="hidden sm:inline">LinkedIn</span>
                        <span className="sm:hidden">LinkedIn</span>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button
                      onClick={goToContact}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 h-12 group"
                    >
                      <span className="mr-2">
                        Ver página de contacto completa
                      </span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AboutMe;
