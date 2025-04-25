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
  currentTime: number;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
}

export interface AudioControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
}

export interface SongListProps {
  songs: Song[];
  currentSongId: string;
  onSelectSong: (song: Song) => void;
} 