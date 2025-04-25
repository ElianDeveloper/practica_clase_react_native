import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { darkTheme, withOpacity } from "../constants/colors";
import { MusicPlayer } from "../components/MusicPlayer";
import { SongList } from "../components/SongList";
import { AudioControls } from "../components/AudioControls";
import { Song } from "../types";

// Variable local para el tema actual
const temaGeneral = darkTheme; // Cambiar a darkTheme para usar el tema oscuro

// Datos de ejemplo para las canciones
const songs: Song[] = [
  {
    id: "1",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: 354,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
  },
  {
    id: "2",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    duration: 482,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
  },
  {
    id: "3",
    title: "Hotel California",
    artist: "Eagles",
    duration: 390,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
  },
];

export default function App() {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Efecto para el contador de tiempo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < currentSong.duration) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= currentSong.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTime, currentSong.duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setCurrentTime(0);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
    setCurrentTime(0);
  };

  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.titulo}>Aplicación de Música</Text>
        <Text style={styles.subtitulo}>
          Ejemplo de Componentes Dinámicos y Props
        </Text>

        {/* Reproductor Principal */}
        <MusicPlayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          currentTime={currentTime}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSeek={handleSeek}
        />

        {/* Lista de Canciones */}
        <SongList
          songs={songs}
          currentSongId={currentSong.id}
          onSelectSong={handleSelectSong}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: temaGeneral.surface,
  },
  section: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: temaGeneral.card,
    borderRadius: 10,
    shadowColor: temaGeneral.shadow.color,
    shadowOffset: temaGeneral.shadow.offset,
    shadowOpacity: temaGeneral.shadow.opacity,
    shadowRadius: temaGeneral.shadow.radius,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: temaGeneral.text,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: temaGeneral.textSecondary,
    marginBottom: 15,
  },
  // Reproductor Principal
  musicPlayer: {
    backgroundColor: withOpacity(temaGeneral.primary, 0.1),
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  coverImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 15,
    backgroundColor: temaGeneral.surface,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 15,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: temaGeneral.text,
    marginBottom: 5,
  },
  songArtist: {
    fontSize: 16,
    color: temaGeneral.textSecondary,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlButton: {
    padding: 10,
  },
  controlText: {
    fontSize: 24,
    color: temaGeneral.text,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: temaGeneral.primary,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  playButtonText: {
    fontSize: 24,
    color: temaGeneral.card,
  },
  // Lista de Canciones
  songList: {
    marginVertical: 20,
  },
  songItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: withOpacity(temaGeneral.secondary, 0.1),
  },
  currentSongItem: {
    backgroundColor: withOpacity(temaGeneral.primary, 0.2),
    borderLeftWidth: 4,
    borderLeftColor: temaGeneral.primary,
  },
  songItemInfo: {
    flex: 1,
  },
  songItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: temaGeneral.text,
    marginBottom: 5,
  },
  songItemArtist: {
    fontSize: 14,
    color: temaGeneral.textSecondary,
  },
  songDuration: {
    fontSize: 14,
    color: temaGeneral.textSecondary,
    alignSelf: "center",
  },
  // Controles de Audio
  audioControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: withOpacity(temaGeneral.secondary, 0.1),
    borderRadius: 10,
    padding: 15,
  },
  audioButton: {
    padding: 10,
    borderRadius: 20,
  },
  activeAudioButton: {
    backgroundColor: withOpacity(temaGeneral.primary, 0.2),
  },
  audioButtonText: {
    fontSize: 20,
  },
  volumeControl: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  volumeIcon: {
    fontSize: 16,
    color: temaGeneral.text,
    marginHorizontal: 5,
  },
  volumeSlider: {
    flex: 1,
    height: 4,
    backgroundColor: withOpacity(temaGeneral.textSecondary, 0.3),
    borderRadius: 2,
    marginHorizontal: 10,
  },
  volumeBar: {
    height: "100%",
    backgroundColor: temaGeneral.primary,
    borderRadius: 2,
  },
});
