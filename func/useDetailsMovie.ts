import { detailsMovie } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

export const useDetailMovie = (id: any) => {
  const {
    data: detailsFilm,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => detailsMovie(id),
  });

  return { detailsFilm, isLoading, error };
};
