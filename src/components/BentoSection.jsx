import { a } from 'framer-motion/client';
import { User, Code, Briefcase, GraduationCap, Phone, Mail, Github, Linkedin } from 'lucide-react';

const PortfolioBento = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Sobre Mí */}
        <a href="/about" className='col-span-2 block'>
        <div className=" bg-white h-full p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
          <div className="flex items-start justify-between mb-6 relative z-10">
            <h2 className="text-3xl font-bold text-blue-600 flex items-center">
              <User className="w-8 h-8 mr-3 text-blue-600" />
              Sobre Mí
            </h2>
            <img
              src="/assets/profile.webp"
              transition-name='profile'
              alt="Foto de perfil"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="text-lg leading-relaxed text-gray-600 mb-6 relative z-10">
            Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. 
            Con experiencia en React, Node.js y diseño UX/UI, me esfuerzo por combinar creatividad y 
            tecnología en cada proyecto.
          </p>
        </div>
        </a>

        {/* Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl row-span-2 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-100 to-transparent rounded-tr-[100px] transition-all duration-300 group-hover:scale-110" />
          <h2 className="text-3xl font-bold text-green-600 mb-6 flex items-center relative z-10">
            <Code className="w-8 h-8 mr-3 text-green-600" /> Skills
          </h2>
          <ul className="space-y-3 relative z-10">
            {['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'RESTful APIs'].map((skill, index) => (
              <li key={index} className="flex items-center text-lg text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Experiencia */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100 to-transparent rounded-tl-[100px] transition-all duration-300 group-hover:scale-110" />
          <h2 className="text-3xl font-bold text-purple-600 mb-4 flex items-center relative z-10">
            <Briefcase className="w-8 h-8 mr-3 text-purple-600" /> Experiencia
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 relative z-10">
            3+ años de experiencia en desarrollo web full-stack, trabajando en proyectos desde startups hasta grandes empresas.
          </p>
        </div>

        {/* Educación */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 flex items-center relative z-10">
            <GraduationCap className="w-8 h-8 mr-3 text-yellow-600" /> Educación
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 relative z-10">
            Ingeniería en Sistemas Computacionales - Universidad XYZ
          </p>
        </div>

        {/* Contacto */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl col-span-2 md:col-span-3 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-red-100 to-transparent rounded-tr-[100px] transition-all duration-300 group-hover:scale-110" />
          <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center relative z-10">
            <Phone className="w-8 h-8 mr-3 text-red-600" /> Contacto
          </h2>
          <div className="flex flex-wrap gap-6 relative z-10">
            <a href="mailto:tu@email.com" className="flex items-center text-lg text-gray-600 hover:text-red-600 transition-colors">
              <Mail className="w-6 h-6 mr-2" /> tu@email.com
            </a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-600 hover:text-red-600 transition-colors">
              <Github className="w-6 h-6 mr-2" /> GitHub
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-600 hover:text-red-600 transition-colors">
              <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBento;