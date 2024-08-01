import React, { useState } from 'react';
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
import { useAddTrackMutation } from '../../redux/apiSlice';

type AddTrackProps = {
  genreId: number | null;
};

export default function AddTrack({ genreId }: AddTrackProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [group, setGroup] = useState('');
  const [img, setImg] = useState('');
  const [addTrack] = useAddTrackMutation();

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const handleSubmit = async (): Promise<void> => {
    if (genreId !== null) {
      await addTrack({ group, title, img, genre_id: genreId.toString() });
      handleClose();
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>Добавить трек</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить новый трек</ModalHeader>
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
              Добавить
            </Button>
            <Button variant="ghost" onClick={handleClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}