import React from 'react';
import { Box } from '@chakra-ui/react';
import { useGetTracksByGenreQuery } from '../../redux/apiSlice';
import type { TrackType } from '../../types/appTypes';
import TrackItem from './TrackItem';

type TrackListProps = {
  genreId: number;
  onPlayTrack: (track: TrackType) => void;
};

export default function TrackList({ genreId, onPlayTrack }: TrackListProps): JSX.Element {
  const { data: tracks, error, isLoading } = useGetTracksByGenreQuery(genreId);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error loading tracks</Box>;
  }

  return (
    <div>
      {tracks &&
        tracks.map((track) => (
          <TrackItem key={track.id} track={track} onPlayTrack={onPlayTrack} />
        ))}
    </div>
  );
}
