declare module 'movie-trailer' {
  const movieTrailer: (
    name: string,
    options?: { id?: boolean }
  ) => Promise<string | null>;
  export default movieTrailer;
}
