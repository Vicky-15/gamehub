import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenresList;
