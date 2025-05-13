// src/components/contact/ContactForm.tsx
import React, { useState, type FormEvent } from "react";
import { MessageSquare, Send, User, Mail, Loader2 } from "lucide-react";

interface FormStatus {
  type: "success" | "error" | "loading" | null;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Enviando..." });

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d1c02a12-3556-41ed-8cd4-82ebdd2944e1");

    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          type: "success",
          message: "¡Mensaje enviado con éxito! Te contactaré pronto.",
        });
      }
    } catch (error) {
      console.log("Error", error);
      setFormStatus({
        type: "error",
        message:
          "Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="flex items-center font-bold text-lg sm:text-xl mb-5 text-gray-800 dark:text-white">
        <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
        Envíame un mensaje
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="relative">
          <label
            htmlFor="name"
            className="text-sm text-gray-600 dark:text-gray-400 mb-1 block"
          >
            Nombre
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Tu nombre"
              className="w-full p-2 sm:p-3 pl-9 sm:pl-10 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800/60 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="text-sm text-gray-600 dark:text-gray-400 mb-1 block"
          >
            Correo electrónico
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="tu.email@ejemplo.com"
              className="w-full p-2 sm:p-3 pl-9 sm:pl-10 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800/60 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm text-gray-600 dark:text-gray-400 mb-1 block"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Cuéntame sobre tu proyecto o idea..."
            rows={5}
            className="w-full p-2 sm:p-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800/60 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 sm:py-3 px-4 sm:px-6 flex items-center justify-center text-sm sm:text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <>
              <span>Enviar mensaje</span>
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </button>

        {formStatus && (
          <div
            className={`mt-3 p-2.5 rounded-lg text-center text-xs sm:text-sm font-medium ${
              formStatus.type === "success"
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
            }`}
          >
            {formStatus.message}
          </div>
        )}
      </form>
    </>
  );
};

export default ContactForm;
