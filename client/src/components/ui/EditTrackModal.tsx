import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import type { TrackType, TrackCrateType } from '../../types/appTypes';
import { useUpdateTrackMutation } from '../../redux/apiSlice';

type EditTrackModalProps = {
  track: TrackType;
  isOpen: boolean;
  onClose: () => void;
};

export default function EditTrackModal({ track, isOpen, onClose }: EditTrackModalProps): JSX.Element {
  const [title, setTitle] = useState(track.title);
  const [group, setGroup] = useState(track.group);
  const [img, setImg] = useState(track.img);
  const [genreId, setGenreId] = useState(track.genre_id);
  const [updateTrack] = useUpdateTrackMutation();

  useEffect(() => {
    setTitle(track.title);
    setGroup(track.group);
    setImg(track.img);
    setGenreId(track.genre_id);
  }, [track]);

  const handleSubmit = async (): Promise<void> => {
    const updatedTrack: TrackCrateType = { title, group, img, genre_id: genreId };
    await updateTrack({ id: track.id, ...updatedTrack });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Редактировать трек</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Название трека</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Группа</FormLabel>
            <Input value={group} onChange={(e) => setGroup(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Ссылка на изображение</FormLabel>
            <Input value={img} onChange={(e) => setImg(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Сохранить
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}