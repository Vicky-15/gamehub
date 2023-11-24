import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="10px">
          <HStack>
            <Image
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              whiteSpace="break-spaces"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
