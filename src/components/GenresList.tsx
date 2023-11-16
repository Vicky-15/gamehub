import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenresList;
