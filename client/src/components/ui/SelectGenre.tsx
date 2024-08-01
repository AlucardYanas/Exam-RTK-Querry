import React from 'react';
import { Box, FormControl, FormHelperText, FormLabel, Select, Text } from '@chakra-ui/react';
import { useGetGenresQuery } from '../../redux/apiSlice';

type SelectGenreProps = {
  onGenreSelect: (genreId: number) => void;
};

export default function SelectGenre({ onGenreSelect }: SelectGenreProps): JSX.Element {
  const { data: genres, error, isLoading } = useGetGenresQuery();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error loading genres</Box>;
  }

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const genreId = Number(event.target.value);
    onGenreSelect(genreId);
  };

  return (
    <Box bg="gray.300" p={3} rounded="md" borderBottom="2px solid tomato">
      <FormControl>
        <FormLabel>
          <Text as="b">Выбор жанра</Text>
        </FormLabel>
        <Select name="genre_id" placeholder="Select genre" onChange={handleGenreChange}>
          {genres && genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
        <FormHelperText>музыкальные предпочтения</FormHelperText>
      </FormControl>
    </Box>
  );
}
