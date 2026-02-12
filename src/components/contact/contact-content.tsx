'use client';

import { Container } from '@/components/ui/container';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactContent() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold text-indigo-950 md:text-5xl mb-6 uppercase tracking-wide">
            Contacto
          </h1>
          <div className="h-1 w-24 bg-indigo-600 mx-auto rounded-full opacity-60 mb-8" />
          <p className="text-xl text-slate-600 leading-relaxed">
            Estamos listos para atender sus requerimientos. <br />
            Contáctenos directamente a través de nuestros canales oficiales para una atención personalizada y rápida.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">

          {/* WhatsApp / Phone Card */}
          <motion.a
            href="https://wa.me/56993194568"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="mb-6 rounded-full bg-green-50 p-4 transition-colors group-hover:bg-green-100">
              <MessageCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-2">WhatsApp Directo</h3>
            <p className="text-slate-500 mb-6">Chatea con nosotros para cotizaciones rápidas.</p>
            <span className="text-lg font-semibold text-green-700 group-hover:underline">
              +56 9 9319 4568
            </span>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:info@crea-imagen.cl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="mb-6 rounded-full bg-indigo-50 p-4 transition-colors group-hover:bg-indigo-100">
              <Mail className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Correo Electrónico</h3>
            <p className="text-slate-500 mb-6">Para detalles técnicos y archivos adjuntos.</p>
            <span className="text-lg font-semibold text-indigo-800 group-hover:underline">
              info@crea-imagen.cl
            </span>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="mb-6 rounded-full bg-slate-100 p-4 transition-colors group-hover:bg-slate-200">
              <MapPin className="h-10 w-10 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Ubicación</h3>
            <p className="text-slate-500 mb-2">Av. Alemania 5600, Piso 1</p>
            <p className="text-indigo-950 font-semibold">Valparaíso, Chile</p>
          </motion.div>

        </div>

        {/* Additional Info / Schedule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-indigo-950 text-indigo-100 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <Clock className="w-8 h-8 text-indigo-400" />
            <h3 className="text-2xl text-white">Horario de Atención</h3>
            <p className="text-lg">
              Lunes a Viernes: <span className="text-white font-medium">9:00 - 18:00 hrs</span>
            </p>
            <p className="max-w-xl mx-auto text-indigo-200 mt-2">
              Realizamos envíos a todo Chile. Contáctenos para coordinar la entrega de sus reconocimientos y galardones.
            </p>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}
