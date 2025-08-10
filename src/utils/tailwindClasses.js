// Constantes de clases de Tailwind para reutilización en todo el proyecto

// Clases base para cards
export const cardBase = "bg-white rounded-xl shadow-lg transition-all duration-300";
export const cardHover = "hover:shadow-xl hover:-translate-y-2";
export const cardInteractive = `${cardBase} ${cardHover}`;

// Clases para iconos
export const iconContainer = "flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl";
export const iconLarge = "h-8 w-8 text-blue-800";
export const iconSmall = "h-4 w-4 text-blue-800";

// Clases para textos
export const textHeading = "text-xl font-bold text-gray-900";
export const textHeadingCenter = "text-xl font-bold text-gray-900 text-center";
export const textBody = "text-gray-600";
export const textBodyCenter = "text-gray-600 text-center";

// Clases para botones
export const buttonBase = "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
export const buttonPrimary = "bg-blue-800 hover:bg-blue-900 text-white focus:ring-blue-500";
export const buttonSecondary = "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500";
export const buttonOutline = "border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-500";
export const buttonDanger = "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500";

// Clases para tamaños de botones
export const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
};

// Clases para layouts
export const containerMax = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
export const gridResponsive = "grid grid-cols-1 lg:grid-cols-2 gap-12";
export const flexCenter = "flex items-center justify-center";

// Clases para gradientes y fondos
export const gradientPrimary = "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700";
export const overlayDark = "bg-black/10";

// Clases para animaciones
export const transitionSmooth = "transition-all duration-300";
export const transformHover = "transform hover:-translate-y-2";

// Clases para espaciado
export const spacingCard = "p-8";
export const spacingSection = "py-16";
export const spacingText = "mb-4";
export const spacingList = "space-y-2";

// Clases para estados
export const disabledState = "opacity-50 cursor-not-allowed";
