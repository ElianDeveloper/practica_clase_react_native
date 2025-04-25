# Guía de Componentes en React Native

# Fundamentos de React Native

## Conceptos Clave

### 1. ¿Qué es un Componente?
Un componente es una pieza fundamental de código que:
- Representa una parte de la interfaz de usuario
- Puede ser reutilizado en diferentes partes de la aplicación
- Mantiene su propia lógica y estado
- Se puede componer con otros componentes

**Ejemplo Visual:**
```
┌─────────────────┐
│  MusicPlayer    │
├─────────────────┤
│  ┌───────────┐  │
│  │  Cover    │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │ Controls  │  │
│  └───────────┘  │
└─────────────────┘
```

### 2. ¿Qué son las Props?
Las props (propiedades) son:
- Datos que se pasan de un componente padre a un componente hijo
- Son inmutables (no se pueden modificar dentro del componente hijo)
- Pueden ser de cualquier tipo (strings, números, objetos, funciones)
- Permiten la comunicación entre componentes

**Ejemplo:**
```typescript
// Componente Padre
<MusicPlayer
  song="Canción 1"      // Prop de tipo string
  duration={180}        // Prop de tipo número
  isPlaying={true}      // Prop de tipo booleano
  onPlay={handlePlay}   // Prop de tipo función
/>
```

### 3. Tipos de Componentes

#### Componentes Funcionales
- Son funciones de JavaScript/TypeScript
- Más modernos y recomendados
- Usan Hooks para manejar estado y efectos
- Ejemplo:
```typescript
const MusicPlayer = () => {
  return <View>...</View>;
};
```

#### Componentes de Clase
- Son clases de JavaScript/TypeScript
- Más antiguos pero aún válidos
- Usan métodos de ciclo de vida
- Ejemplo:
```typescript
class MusicPlayer extends React.Component {
  render() {
    return <View>...</View>;
  }
}
```

### 4. Ciclo de Vida de un Componente

1. **Montaje (Mounting)**
   - El componente se crea y se inserta en el DOM
   - Se ejecuta una sola vez al inicio

2. **Actualización (Updating)**
   - Ocurre cuando las props o el estado cambian
   - El componente se re-renderiza

3. **Desmontaje (Unmounting)**
   - El componente se elimina del DOM
   - Útil para limpiar recursos

### 5. Estado vs Props

#### Estado (State)
- Datos que pertenecen al componente
- Puede cambiar durante la vida del componente
- Se maneja con `useState` o `this.state`
- Ejemplo:
```typescript
const [isPlaying, setIsPlaying] = useState(false);
```

#### Props
- Datos que vienen del componente padre
- Son inmutables (no se pueden cambiar)
- Se pasan como atributos
- Ejemplo:
```typescript
<MusicPlayer song={currentSong} />
```

### 6. Composición de Componentes

La composición es cuando:
- Un componente contiene otros componentes
- Se crea una jerarquía de componentes
- Permite construir interfaces complejas
- Ejemplo:
```typescript
const App = () => {
  return (
    <View>
      <Header />
      <MusicPlayer>
        <Cover />
        <Controls />
      </MusicPlayer>
      <Footer />
    </View>
  );
};
```

### 7. Buenas Prácticas Iniciales

1. **Nombrado**
   - Usar nombres descriptivos
   - Seguir convenciones (PascalCase para componentes)
   - Ejemplo: `MusicPlayer`, `SongList`

2. **Responsabilidad Única**
   - Cada componente debe hacer una cosa
   - Mantener la lógica simple y clara
   - Ejemplo: `PlayButton` solo maneja la reproducción

3. **Reutilización**
   - Diseñar componentes para ser reutilizados
   - Hacerlos lo más genéricos posible
   - Ejemplo: `Button` puede usarse en toda la app

4. **Documentación**
   - Comentar el propósito del componente
   - Documentar las props requeridas
   - Ejemplo:
```typescript
/**
 * Componente para reproducir música
 * @param {string} song - Título de la canción
 * @param {boolean} isPlaying - Estado de reproducción
 */
const MusicPlayer = ({ song, isPlaying }) => {
  // ...
};

## Estructura de Componentes

### 1. Convenciones de Nombrado
- **Archivos**: PascalCase (ej: `MusicPlayer.tsx`)
- **Carpetas**: PascalCase (ej: `components/MusicPlayer/`)
- **Componentes**: PascalCase (ej: `export const MusicPlayer`)
- **Props**: camelCase (ej: `currentSong`, `onPlayPause`)

### 2. Estructura de Archivos
```
components/
  MusicPlayer/
    index.tsx      # Componente principal
    styles.ts      # Estilos específicos
    types.ts       # Tipos específicos
  SongList/
    index.tsx
    styles.ts
    types.ts
```

## Creación de Componentes

### 1. Definición de Tipos
```typescript
// types.ts
export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  coverUrl?: string;
}

export interface MusicPlayerProps {
  currentSong: Song;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}
```

### 2. Estructura del Componente
```typescript
// index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MusicPlayerProps } from './types';
import { styles } from './styles';

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  return (
    <View style={styles.container}>
      {/* Contenido del componente */}
    </View>
  );
};
```

### 3. Estilos
```typescript
// styles.ts
import { StyleSheet } from 'react-native';
import { darkTheme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.card,
    borderRadius: 15,
    padding: 20,
  },
  // ... más estilos
});
```

## Manejo de Props

### 1. Tipos de Props
- **Datos**: Información para renderizar
  ```typescript
  currentSong: Song;
  isPlaying: boolean;
  ```
- **Callbacks**: Funciones para eventos
  ```typescript
  onPlayPause: () => void;
  onNext: () => void;
  ```
- **Estilos**: Personalización visual
  ```typescript
  style?: ViewStyle;
  textStyle?: TextStyle;
  ```
- **Configuración**: Opciones del componente
  ```typescript
  showControls?: boolean;
  autoPlay?: boolean;
  ```

### 2. Props Obligatorias vs Opcionales
```typescript
interface Props {
  // Obligatorias (sin ?)
  currentSong: Song;
  onPlayPause: () => void;
  
  // Opcionales (con ?)
  style?: ViewStyle;
  showControls?: boolean;
}
```

### 3. Valores por Defecto
```typescript
const MusicPlayer: React.FC<Props> = ({
  showControls = true,  // Valor por defecto
  style = {},          // Valor por defecto
  currentSong,         // Obligatorio
}) => {
  // ...
};
```

## Comunicación entre Componentes

### 1. Padre a Hijo (Props)
```typescript
// Componente Padre
const App = () => {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  
  return (
    <MusicPlayer
      currentSong={currentSong}
      onPlayPause={handlePlayPause}
    />
  );
};
```

### 2. Hijo a Padre (Callbacks)
```typescript
// Componente Hijo
const SongList: React.FC<SongListProps> = ({
  onSelectSong,
}) => {
  return (
    <TouchableOpacity onPress={() => onSelectSong(song)}>
      {/* ... */}
    </TouchableOpacity>
  );
};
```

## Mejores Prácticas

### 1. Componentización
- **Responsabilidad Única**: Cada componente debe tener una única responsabilidad
- **Reutilización**: Diseñar componentes para ser reutilizables
- **Composición**: Usar composición sobre herencia

### 2. Props
- **Documentación**: Documentar todas las props con TypeScript
- **Validación**: Validar props requeridas
- **Inmutabilidad**: No modificar props dentro del componente

### 3. Estilos
- **Separación**: Mantener estilos separados del componente
- **Temas**: Usar sistema de temas para consistencia
- **Responsive**: Diseñar para diferentes tamaños de pantalla

### 4. Estado
- **Local**: Mantener el estado lo más cerca posible de donde se usa
- **Lifting**: Elevar el estado solo cuando sea necesario
- **Context**: Usar Context para estado global

### 5. Rendimiento
- **Memo**: Usar React.memo para componentes puros
- **Callback**: Usar useCallback para funciones
- **Memo**: Usar useMemo para cálculos costosos

## Ejemplo Completo

```typescript
// types.ts
export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
}

export interface MusicPlayerProps {
  currentSong: Song;
  isPlaying: boolean;
  onPlayPause: () => void;
  style?: ViewStyle;
}

// styles.ts
export const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.card,
    borderRadius: 15,
    padding: 20,
  },
});

// index.tsx
export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentSong,
  isPlaying,
  onPlayPause,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{currentSong.title}</Text>
      <TouchableOpacity onPress={onPlayPause}>
        <Text>{isPlaying ? '⏸' : '▶'}</Text>
      </TouchableOpacity>
    </View>
  );
};
```