import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MusicPlayerProps } from '../types';
import { AudioControls } from './AudioControls';
import { darkTheme } from '../constants/colors';

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentSong,
  isPlaying,
  currentTime,
  onPlayPause,
  onNext,
  onPrevious,
  onSeek,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        {currentSong.coverUrl ? (
          <Image
            source={{ uri: currentSong.coverUrl }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.coverPlaceholder}>
            <Text style={styles.coverPlaceholderText}>🎵</Text>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{currentSong.title}</Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>
      <AudioControls
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={currentSong.duration}
        onPlayPause={onPlayPause}
        onPrevious={onPrevious}
        onNext={onNext}
        onSeek={onSeek}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: darkTheme.shadow.color,
    shadowOffset: darkTheme.shadow.offset,
    shadowOpacity: darkTheme.shadow.opacity,
    shadowRadius: darkTheme.shadow.radius,
    elevation: 5,
  },
  coverContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: darkTheme.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverPlaceholderText: {
    fontSize: 60,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkTheme.text,
    marginBottom: 5,
  },
  artist: {
    fontSize: 18,
    color: darkTheme.textSecondary,
  },
}); 