import { motion, AnimatePresence } from 'framer-motion';
import TransitionLayout from '../components/TransitionLayout';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';


interface FormData {
  name: string;
  email: string;
  message: string;
}

// ⚠️ IMPORTANTE: Reemplaza esto con tu ID real de Formspree
// Lo encuentras en: https://formspree.io/forms/TU_FORM_ID/integration
const FORMSPREE_FORM_ID = "tu_id_de_formspree"; // Ejemplo: "xwkgpzje"

const Contact = () => {
  const [state] = useForm(FORMSPREE_FORM_ID);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  

  return (
    <TransitionLayout>
      <section className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-white to-neutral-100 px-4 sm:px-6">
        <div className="bg-white w-full max-w-lg shadow-xl rounded-2xl p-6 sm:p-10">

          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-neutral-800 tracking-tight"
            >
              Hablemos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-neutral-500 max-w-md mx-auto"
            >
              Cuéntame sobre tu proyecto, pregunta lo que necesites o simplemente saluda.
            </motion.p>
          </div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
          >

            {/* NOMBRE */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full px-4 pt-5 pb-2 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-indigo-600 placeholder-transparent"
                placeholder="Nombre"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <label
                htmlFor="name"
                className="absolute left-4 top-1 text-xs text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 transition-all cursor-text"
              >
                Nombre
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-4 pt-5 pb-2 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-indigo-600 placeholder-transparent"
                placeholder="Correo"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <label
                htmlFor="email"
                className="absolute left-4 top-1 text-xs text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 transition-all cursor-text"
              >
                Correo Electrónico
              </label>
            </div>

            {/* MENSAJE */}
            <div className="relative">
              <textarea
                id="message"
                required
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full px-4 pt-5 pb-2 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-indigo-600 placeholder-transparent resize-none"
                placeholder="Mensaje"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <label
                htmlFor="message"
                className="absolute left-4 top-1 text-xs text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 transition-all cursor-text"
              >
                Mensaje
              </label>
            </div>

            {/* BOTÓN */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-medium text-sm py-3 px-8 rounded-full shadow transition-all"
              >
                {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>

            {/* MENSAJE DE ÉXITO ANIMADO */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center text-sm font-medium text-green-600 bg-green-50 border border-green-200 py-3 px-4 rounded-lg"
                >
                  ✨ ¡Mensaje enviado con éxito!
                </motion.div>
              )}
            </AnimatePresence>

          </motion.form>
        </div>
      </section>
    </TransitionLayout>
  );
};

export default Contact;