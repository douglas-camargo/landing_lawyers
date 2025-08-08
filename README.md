# Landing Abogados - LexFirm

Landing page para bufete de abogados construida con React, Vite y Tailwind CSS, siguiendo la metodología **Atomic Design**.

## 🏗️ Estructura del Proyecto

El proyecto está organizado siguiendo los principios de **Atomic Design**:

```
src/
├── components/
│   ├── atoms/           # Componentes básicos reutilizables
│   │   ├── Button.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── FooterLink.jsx
│   │   ├── Logo.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── StatCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── ButtonWhatsapp.jsx
│   │   └── ComponenteSvg.jsx
│   ├── molecules/       # Combinaciones de átomos
│   │   ├── HeroContent.jsx
│   │   ├── MobileMenu.jsx
│   │   └── Navigation.jsx
│   ├── organisms/       # Secciones complejas de la interfaz
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── templates/       # Layouts que combinan organismos
│   │   └── LandingTemplate.jsx
│   ├── pages/          # Páginas completas (futuro)
│   ├── index.js        # Índice de exportaciones
│   ├── README.md       # Documentación de componentes
│   └── ATOMIC_DESIGN_STRUCTURE.md # Estructura visual
├── utils/              # Utilidades del proyecto
│   └── deviceUtils.js  # Detección de dispositivos y WhatsApp
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Tecnologías Utilizadas

- **React 18.3.1** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos
- **Atomic Design** - Metodología de diseño de componentes
- **Detección de Dispositivos** - Lógica inteligente para WhatsApp

## 📦 Instalación y Uso

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

### Previsualizar build de producción
```bash
npm run preview
```

## 🎨 Componentes Atomic Design

### 🧬 Átomos (9 componentes)
- **Button**: Botón reutilizable con variantes (primary, secondary, outline, danger)
- **FeatureCard**: Tarjeta para mostrar características del bufete
- **FooterLink**: Enlace del footer con estilos consistentes
- **Logo**: Logo de la empresa con diferentes tamaños
- **ServiceCard**: Tarjeta para mostrar servicios legales
- **StatCard**: Tarjeta para mostrar estadísticas
- **TestimonialCard**: Tarjeta para mostrar testimonios de clientes
- **ButtonWhatsapp**: Botón flotante de WhatsApp
- **ComponenteSvg**: Componente SVG reutilizable para iconos

### 🧬 Moléculas (3 componentes)
- **HeroContent**: Contenido principal del hero con botones y estadísticas
- **MobileMenu**: Menú móvil desplegable
- **Navigation**: Navegación principal del sitio

### 🦠 Organismos (6 componentes)
- **About**: Sección "Nosotros" con información del bufete y valores
- **Footer**: Footer completo con información de contacto y enlaces
- **Header**: Header completo con navegación y logo
- **Hero**: Sección hero con contenido y imagen
- **Services**: Sección de servicios legales
- **Testimonials**: Sección de testimonios de clientes

### 📄 Templates (1 componente)
- **LandingTemplate**: Template principal que combina todos los organismos

## 🔧 Características

- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Integración inteligente con WhatsApp (detección automática de dispositivos)
- ✅ Navegación suave entre secciones
- ✅ Estructura modular y reutilizable
- ✅ Optimizado para SEO
- ✅ Sin TypeScript (solo JavaScript)
- ✅ Sección completa "Nosotros"
- ✅ Testimonios de clientes
- ✅ Footer completo con información de contacto
- ✅ Estructura Atomic Design documentada
- ✅ Índice de componentes para importaciones fáciles

## 📱 Responsive Design

El sitio está completamente optimizado para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Pantallas grandes (1280px+)

## 🎯 Secciones del Sitio

### 1. **Header**
- Logo de la empresa
- Navegación principal (Inicio, Servicios, Nosotros, Testimonios, Contacto)
- Menú móvil responsive

### 2. **Hero**
- Título principal impactante
- Descripción del bufete
- Botones de llamada a la acción
- Estadísticas del bufete
- Imagen profesional

### 3. **Servicios**
- 6 servicios legales principales
- Iconos descriptivos
- Características de cada servicio
- Botones de contacto

### 4. **Nosotros**
- Información del bufete
- Valores de la empresa
- Características destacadas
- Imagen del equipo
- Estadísticas de casos exitosos

### 5. **Testimonios**
- 6 testimonios de clientes
- Calificaciones con estrellas
- Fotos de perfil
- Estadísticas de satisfacción

### 6. **Footer**
- Información de contacto completa
- Enlaces a servicios
- Enlaces rápidos
- Redes sociales
- Botón de consulta gratuita
- Sección accesible desde el header (ID: contacto)

## 📚 Documentación de Componentes

### Documentación Detallada
- **`src/components/README.md`** - Guía completa de componentes
- **`src/components/ATOMIC_DESIGN_STRUCTURE.md`** - Estructura visual
- **`src/components/index.js`** - Índice de exportaciones

## 🔧 Utilidades del Proyecto

### `src/utils/deviceUtils.js`
Contiene funciones para la detección inteligente de dispositivos y generación de URLs de WhatsApp:

- **`Dispositivo`**: Objeto con métodos para detectar diferentes tipos de dispositivos
- **`generarUrlWhatsApp(numero, mensaje)`**: Genera URL correcta según el dispositivo
- **`abrirWhatsApp(numero, mensaje)`**: Abre WhatsApp con detección automática

#### Uso:
```javascript
import { abrirWhatsApp, generarUrlWhatsApp } from '../utils/deviceUtils';

// Abrir WhatsApp automáticamente
abrirWhatsApp('+584241232755', 'Hola, necesito información');

// Generar URL para usar en enlaces
const url = generarUrlWhatsApp('+584241232755', 'Hola, necesito información');
```

### Importaciones Fáciles
```jsx
// Importación individual
import { Button, Logo, Header } from './components';

// Importación directa
import Button from './components/atoms/Button';
import Header from './components/organisms/Header';
```

## 🔄 Flujo de Componentes

```
App.jsx
  ↓
LandingTemplate
  ↓
Organismos (Header, Hero, Services, About, Testimonials, Footer)
  ↓
Moléculas (Navigation, HeroContent, MobileMenu)
  ↓
Átomos (Button, Logo, ServiceCard, etc.)
```

## 📊 Estadísticas de Componentes

- **Total de componentes**: 19
- **Átomos**: 9 (47%)
- **Moléculas**: 3 (17%)
- **Organismos**: 6 (33%)
- **Templates**: 1 (6%)

### Reutilización
- **Button**: 15+ instancias
- **Logo**: 2 instancias
- **ServiceCard**: 6 instancias
- **TestimonialCard**: 6 instancias

## 🎯 Próximas Mejoras

- [ ] Implementar formulario de contacto
- [ ] Agregar más páginas en la carpeta `pages/`
- [ ] Implementar lazy loading
- [ ] Agregar tests unitarios
- [ ] Implementar blog de noticias legales
- [ ] Agregar sección de preguntas frecuentes
- [ ] Implementar chat en vivo
- [ ] Agregar mapa interactivo en el footer
- [ ] Implementar Storybook para documentación visual
- [ ] Agregar animaciones más avanzadas con Framer Motion

## 🤝 Contribución

### Estructura para Nuevos Componentes

1. **Átomos**: Crear en `src/components/atoms/`
2. **Moléculas**: Crear en `src/components/molecules/`
3. **Organismos**: Crear en `src/components/organisms/`
4. **Templates**: Crear en `src/components/templates/`
5. **Páginas**: Crear en `src/components/pages/`

### Convenciones
- **Nombres**: PascalCase para componentes
- **Archivos**: PascalCase.jsx
- **Props**: camelCase
- **Documentación**: Actualizar README.md correspondiente

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
