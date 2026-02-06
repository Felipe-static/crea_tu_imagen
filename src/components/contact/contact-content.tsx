'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactContent() {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold text-stone-900 mb-4 md:text-5xl font-serif">Hablemos de Excelencia</h1>
              <p className="text-xl text-stone-600">
                Estamos aquí para ayudarle a encontrar la manera perfecta de honrar a quienes hacen grande a su organización.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-stone-100 p-3 text-stone-900">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">Correo Electrónico</h3>
                  <p className="text-stone-600">info@crea-imagen.cl</p>
                  <p className="text-sm text-stone-500 mt-1">Respondemos en menos de 24 horas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-stone-100 p-3 text-stone-900">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">Teléfono / WhatsApp</h3>
                  <p className="text-stone-600">+56 9 1234 5678</p>
                  <p className="text-sm text-stone-500 mt-1">Lunes a Viernes, 9:00 - 18:00 hrs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-stone-100 p-3 text-stone-900">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">Showroom & Taller</h3>
                  <p className="text-stone-600">Av. Providencia 1234, Of. 601</p>
                  <p className="text-stone-600">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white p-8 md:p-10 shadow-xl border border-stone-100"
          >
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Envíenos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Nombre</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="Juan Pérez"
                    className="w-full rounded-md border border-stone-300 px-4 py-2 text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-stone-700">Empresa</label>
                  <input 
                    id="company"
                    type="text" 
                    placeholder="Su Empresa SpA"
                    className="w-full rounded-md border border-stone-300 px-4 py-2 text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-700">Email Corporativo</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="juan@empresa.com"
                  className="w-full rounded-md border border-stone-300 px-4 py-2 text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">¿Qué desea reconocer?</label>
                <textarea 
                  id="message"
                  rows={4} 
                  placeholder="Cuéntenos sobre el evento, la cantidad de personas o el tipo de reconocimiento que tiene en mente..."
                  className="w-full resize-none rounded-md border border-stone-300 px-4 py-2 text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900" 
                />
              </div>

              <Button size="lg" className="w-full justify-between bg-stone-900 text-white hover:bg-stone-800">
                <span>Enviar Solicitud</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-[400px] w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100 relative group">
             {/* Google Map Iframe would go here. Using a static creative placeholder for now. */}
             <div className="absolute inset-0 bg-stone-200 opacity-50 grayscale transition-all group-hover:grayscale-0" />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-xl text-center">
                     <MapPin className="h-8 w-8 text-stone-900 mx-auto mb-2" />
                     <p className="text-stone-900 font-semibold">Ubícanos en el corazón de Providencia</p>
                 </div>
             </div>
        </div>
      </Container>
    </div>
  );
}
