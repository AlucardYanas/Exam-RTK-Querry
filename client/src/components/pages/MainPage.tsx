import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import {
  TbPlayerPlayFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb';
import { motion } from 'framer-motion';
import { MdGraphicEq } from 'react-icons/md';
import SelectGenre from '../ui/SelectGenre';
import TrackList from '../ui/TrackList';
import AddTrack from '../ui/AddTrack';

import type { TrackType } from '../../types/appTypes';

const MotionImage = motion(Image);

export default function MainPage(): JSX.Element {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);

  const handleGenreSelect = (genreId: number): void => {
    setSelectedGenreId(genreId);
  };

  const handlePlayTrack = (track: TrackType): void => {
    setCurrentTrack(track);
  };

  return (
    <Grid mt={5} maxH="200px" templateColumns="2fr 1fr" gap={2}>
      {/* Часть с основного плеера */}
      <GridItem bg="tomato" boxShadow="dark-lg" border="3px solid white">
        <Flex
          p={5}
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          h="100%"
        >
          {currentTrack ? (
            <>
              <Text color="white" as="b" fontSize="2xl">
                {currentTrack.group} - {currentTrack.title}
              </Text>
              {/* Обложка трека */}
              <MotionImage
                boxShadow="dark-lg"
                boxSize="290px"
                border={2}
                rounded="md"
                objectFit="cover"
                src={currentTrack.img}
                alt={currentTrack.title}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
            </>
          ) : (
            <Text color="white" as="b" fontSize="2xl">
              Select a track to play
            </Text>
          )}

          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack bg="yellow" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="tomato" as={MdGraphicEq} />
            </SliderThumb>
          </Slider>

          {/* Кнопки управления треком */}
          <HStack>
            <TbPlayerTrackPrevFilled size={24} />
            <Box>
              <TbPlayerPlayFilled size={42} />
            </Box>
            <TbPlayerTrackNextFilled size={24} />
          </HStack>
        </Flex>
      </GridItem>

      {/* Часть с треками */}
      <GridItem
        rounded="md"
        maxH="600px"
        minH="600px"
        overflowY="auto"
        boxShadow="dark-lg"
        border="3px solid white"
        bg="gray.400"
      >
        <Flex height="100%" flexDir="column" justifyContent="space-between">
          <Box bg="gray.400" zIndex={1}>
            <SelectGenre onGenreSelect={handleGenreSelect} />
          </Box>

          <Box overflowY="auto" height="100%">
            {/* Список треков */}
            {selectedGenreId && (
              <TrackList genreId={selectedGenreId} onPlayTrack={handlePlayTrack} />
            )}
          </Box>

          <Box
            boxShadow="dark-lg"
            borderTop="2px solid tomato"
            width="100%"
            rounded="md"
            bg="gray.300"
          >
            {/* Элемент добавления трека */}
            <AddTrack genreId={selectedGenreId} />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}