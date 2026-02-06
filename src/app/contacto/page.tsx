import { ContactContent } from '@/components/contact/contact-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Crea Imagen',
  description: 'Contáctenos para cotizar sus reconocimientos corporativos. Atención personalizada y envíos a todo Chile.',
};

export default function ContactoPage() {
  return <ContactContent />;
}
