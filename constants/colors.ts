// Definición de temas de colores
export const lightTheme = {
  // Colores principales
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF2D55',
  
  // Colores de fondo
  background: '#FFFFFF',
  surface: '#F5F5F5',
  card: '#FFFFFF',
  
  // Colores de texto
  text: '#000000',
  textSecondary: '#666666',
  textTertiary: '#999999',
  
  // Colores de estado
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  
  // Colores de bordes y separadores
  border: '#E5E5EA',
  separator: '#C6C6C8',
  
  // Colores de interacción
  button: '#007AFF',
  buttonPressed: '#0055B3',
  inputBackground: '#FFFFFF',
  inputBorder: '#E5E5EA',
  
  // Sombras
  shadow: {
    color: '#000000',
    opacity: 0.25,
    offset: {
      width: 0,
      height: 2,
    },
    radius: 3.84,
  }
};

export const darkTheme = {
  // Colores principales
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF375F',
  
  // Colores de fondo
  background: '#000000',
  surface: '#1C1C1E',
  card: '#2C2C2E',
  
  // Colores de texto
  text: '#FFFFFF',
  textSecondary: '#EBEBF5',
  textTertiary: '#8E8E93',
  
  // Colores de estado
  success: '#32D74B',
  warning: '#FFD60A',
  error: '#FF453A',
  
  // Colores de bordes y separadores
  border: '#38383A',
  separator: '#484848',
  
  // Colores de interacción
  button: '#0A84FF',
  buttonPressed: '#0066CC',
  inputBackground: '#1C1C1E',
  inputBorder: '#38383A',
  
  // Sombras
  shadow: {
    color: '#000000',
    opacity: 0.5,
    offset: {
      width: 0,
      height: 2,
    },
    radius: 3.84,
  }
};

// Tipos para TypeScript
export type ThemeColors = typeof lightTheme;

// Constantes de uso común
export const commonColors = {
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  }
};

// Función helper para obtener colores con opacidad
export const withOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}; 