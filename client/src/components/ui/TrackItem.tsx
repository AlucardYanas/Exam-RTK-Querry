import React, { useState } from 'react';
import { TbPlayerPlay, TbPlayerPause, TbTrash, TbEdit, TbMoodPlus } from 'react-icons/tb';
import { Box, Center, Flex, HStack, Avatar } from '@chakra-ui/react';
import type { TrackType } from '../../types/appTypes';
import { useDeleteTrackMutation } from '../../redux/apiSlice';
import EditTrackModal from './EditTrackModal';

type TrackItemProps = {
  track: TrackType;
  onPlayTrack: (track: TrackType) => void;
};

export default function TrackItem({ track, onPlayTrack }: TrackItemProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteTrack] = useDeleteTrackMutation();

  const handlePlay = (): void => {
    setIsPlaying((prev) => !prev);
    onPlayTrack(track);
  };

  const handleDelete = async (): Promise<void> => {
    await deleteTrack(track.id);
  };

  const handleEdit = (): void => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = (): void => {
    setIsEditModalOpen(false);
  };

  return (
    <Flex
      _hover={{
        background: 'gray.300',
        transition: '0.5s',
        borderRadius: '15px',
      }}
      mt={2}
      p={2}
      justifyContent="space-between"
      minH={50}
      gap={1}
      style={{ cursor: 'pointer' }}
    >
      <Center>
        <HStack>
          {isPlaying ? (
            <TbPlayerPause color="red" onClick={handlePlay} />
          ) : (
            <TbPlayerPlay style={{ color: 'red' }} onClick={handlePlay} />
          )}
          <Avatar size="sm" name={track.group} src={track.img} />
          <Box> {`${track.group} - ${track.title.slice(0, 7)}....`}</Box>
        </HStack>
      </Center>
      <Center>
        <HStack spacing={4}>
          <TbMoodPlus
            color={isLiked ? 'green' : 'gray'}
            onClick={() => setIsLiked((prev) => !prev)}
          />
          <TbTrash color="red" onClick={handleDelete} />
          <TbEdit color="red" onClick={handleEdit} />
        </HStack>
      </Center>
      <EditTrackModal track={track} isOpen={isEditModalOpen} onClose={closeEditModal} />
    </Flex>
  );
}