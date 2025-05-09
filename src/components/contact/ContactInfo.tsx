// src/components/contact/ContactInfo.tsx
import React from "react";
import { Award, Code, Calendar } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <h2 className="flex items-center font-bold text-lg sm:text-xl mb-4 text-gray-800 dark:text-white">
        <Award className="w-5 h-5 mr-2 text-blue-500" />
        Sobre mí
      </h2>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg mt-0.5 mr-3">
            <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Desarrollador Full-Stack
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Especializado en React, TypeScript y desarrollo web moderno.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg mt-0.5 mr-3">
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Ubicación
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Santo Domingo, República Dominicana
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-lg mt-4">
          <p className="text-xs text-gray-700 dark:text-gray-300 italic">
            "Desarrollador apasionado por crear experiencias digitales que
            combinen diseño y funcionalidad para resolver problemas reales."
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
