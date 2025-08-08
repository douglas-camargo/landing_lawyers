// ========================================
// ÍNDICE DE COMPONENTES - ATOMIC DESIGN
// ========================================

// 🧬 ÁTOMOS - Componentes básicos reutilizables
export { default as Button } from './atoms/Button';
export { default as FeatureCard } from './atoms/FeatureCard';
export { default as FooterLink } from './atoms/FooterLink';
export { default as Logo } from './atoms/Logo';
export { default as ServiceCard } from './atoms/ServiceCard';
export { default as StatCard } from './atoms/StatCard';
export { default as TestimonialCard } from './atoms/TestimonialCard';
export { default as ButtonWhatsapp } from './atoms/ButtonWhatsapp';
export { default as ComponenteSvg } from './atoms/ComponenteSvg';

// 🧬 MOLÉCULAS - Combinaciones de átomos
export { default as HeroContent } from './molecules/HeroContent';
export { default as MobileMenu } from './molecules/MobileMenu';
export { default as Navigation } from './molecules/Navigation';

// 🦠 ORGANISMOS - Secciones complejas de la interfaz
export { default as About } from './organisms/About';
export { default as Footer } from './organisms/Footer';
export { default as Header } from './organisms/Header';
export { default as Hero } from './organisms/Hero';
export { default as Services } from './organisms/Services';
export { default as Testimonials } from './organisms/Testimonials';

// 📄 TEMPLATES - Layouts que combinan organismos
export { default as LandingTemplate } from './templates/LandingTemplate';

// 📄 PÁGINAS - Páginas completas (futuro)
// export { default as HomePage } from './pages/HomePage';
// export { default as AboutPage } from './pages/AboutPage';
// export { default as ServicesPage } from './pages/ServicesPage';
// export { default as ContactPage } from './pages/ContactPage';
