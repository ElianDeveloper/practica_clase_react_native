import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SongListProps, Song } from '../types';
import { darkTheme } from '../constants/colors';

export const SongList: React.FC<SongListProps> = ({
  songs,
  currentSongId,
  onSelectSong,
}) => {
  const renderItem = ({ item }: { item: Song }) => (
    <TouchableOpacity
      style={[
        styles.songItem,
        item.id === currentSongId && styles.selectedSong,
      ]}
      onPress={() => onSelectSong(item)}
    >
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Text style={styles.songDuration}>
        {new Date(item.duration * 1000).toISOString().substr(14, 5)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={songs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  songItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: darkTheme.surface,
    borderRadius: 10,
    shadowColor: darkTheme.shadow.color,
    shadowOffset: darkTheme.shadow.offset,
    shadowOpacity: darkTheme.shadow.opacity,
    shadowRadius: darkTheme.shadow.radius,
    elevation: 3,
  },
  selectedSong: {
    backgroundColor: darkTheme.primary + '20',
    borderLeftWidth: 4,
    borderLeftColor: darkTheme.primary,
  },
  songInfo: {
    flex: 1,
    marginRight: 10,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: darkTheme.text,
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 14,
    color: darkTheme.textSecondary,
  },
  songDuration: {
    fontSize: 14,
    color: darkTheme.textSecondary,
  },
}); 