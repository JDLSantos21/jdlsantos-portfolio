"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Github, Linkedin, Coffee, Copy, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { toast, Toaster } from "sonner";

const funFacts = [
  "Amo las peliculas tanto como el código",
  "Mi lenguaje favorito es TypeScript",
  "Contribuyo a proyectos open source",
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
    words: ["Desarrollador", "Innovador", "Aprendiz Eterno"],
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
                    23 años
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
                  Soy un desarrollador web full-stack con un fuerte enfoque en
                  crear experiencias de usuario excepcionales. Mi pasión por la
                  tecnología y el aprendizaje continuo me impulsa a mantenerme
                  actualizado con las últimas tendencias y mejores prácticas en
                  el desarrollo de software.
                </p>
                <p>
                  Fuera del mundo del código, disfruto de la fotografía, la
                  lectura de ciencia ficción y la exploración de nuevos lugares.
                  Creo firmemente en el poder de la tecnología para hacer del
                  mundo un lugar mejor y estoy siempre buscando proyectos que
                  tengan un impacto positivo en la sociedad.
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-50 dark:bg-slate-600 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-gray-200">
                  Dato Curioso:
                </h3>
                <p>{funFacts[currentFact]}</p>
                <Button
                  onClick={nextFact}
                  variant="outline"
                  className="mt-2 dark:bg-gray-200 dark:text-black"
                >
                  Siguiente dato
                </Button>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  Contacto
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center"
                    onClick={copyEmail}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    JDLSantos21@hotmail.com
                    <Copy className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center"
                    onClick={sendEmail}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar email
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    Github.com/JDLSantos21
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Linkedin.com/in/JDLSantos21
                  </Button>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        <motion.div
          className="absolute bottom-4 right-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCoffeeCount((prev) => prev + 1)}
            title="¿Me invitas un café?"
          >
            <Coffee className="h-4 w-4" />
          </Button>
        </motion.div>
        {coffeeCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            ¡Gracias por los {coffeeCount} cafés!
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default AboutMe;
