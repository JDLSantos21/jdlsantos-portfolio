// src/components/contact/ContactSocialLinks.tsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSocialLinks: React.FC = () => {
  return (
    <>
      <h2 className="flex items-center font-bold text-lg sm:text-xl mb-3 text-gray-800 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 text-blue-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 16.36v-1.73a4 4 0 0 0-6.85-2.83"></path>
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="9" cy="18" r="1.2"></circle>
          <circle cx="9" cy="18" r=".2"></circle>
          <circle cx="15" cy="18" r="1.2"></circle>
        </svg>
        Conéctate conmigo
      </h2>

      <div className="space-y-3">
        <a
          href="mailto:JDLSantos21@hotmail.com"
          className="flex items-center p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-800/80 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300 group"
        >
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-lg mr-3">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Email
            </span>
            <span className="block text-gray-500 dark:text-gray-400 text-xs truncate">
              JDLSantos21@hotmail.com
            </span>
          </div>
        </a>

        <a
          href="https://github.com/JDLSantos21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-800/80 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300 group"
        >
          <div className="bg-gray-100 dark:bg-gray-900/30 p-1.5 sm:p-2 rounded-lg mr-3">
            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-gray-300" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              GitHub
            </span>
            <span className="block text-gray-500 dark:text-gray-400 text-xs truncate">
              github.com/JDLSantos21
            </span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/jose-armando-de-los-santos-amadis-689b091b7/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-800/80 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300 group"
        >
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-lg mr-3">
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              LinkedIn
            </span>
            <span className="block text-gray-500 dark:text-gray-400 text-xs truncate">
              linkedin.com/in/JDLSantos21
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactSocialLinks;
