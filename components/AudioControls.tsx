import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AudioControlsProps } from '../types';
import { darkTheme } from '../constants/colors';

export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onPrevious,
  onNext,
  onSeek,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
        <TouchableOpacity
          style={[styles.progressThumb, { left: `${progress}%` }]}
          onPress={() => onSeek(currentTime)}
        />
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={onPrevious}
        >
          <Text style={styles.controlText}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.playButton, isPlaying && styles.playingButton]} 
          onPress={onPlayPause}
        >
          <Text style={styles.playButtonText}>{isPlaying ? '⏸' : '▶'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={onNext}
        >
          <Text style={styles.controlText}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 14,
    color: darkTheme.textSecondary,
  },
  progressBarContainer: {
    height: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: darkTheme.surface,
    borderRadius: 2,
  },
  progress: {
    height: '100%',
    backgroundColor: darkTheme.primary,
    borderRadius: 2,
  },
  progressThumb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: darkTheme.primary,
    position: 'absolute',
    top: 4,
    marginLeft: -6,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: darkTheme.surface,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: darkTheme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    shadowColor: darkTheme.shadow.color,
    shadowOffset: darkTheme.shadow.offset,
    shadowOpacity: darkTheme.shadow.opacity,
    shadowRadius: darkTheme.shadow.radius,
    elevation: 5,
  },
  playingButton: {
    backgroundColor: darkTheme.secondary,
  },
  playButtonText: {
    fontSize: 24,
    color: darkTheme.card,
  },
  controlText: {
    fontSize: 24,
    color: darkTheme.text,
  },
}); 