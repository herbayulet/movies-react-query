import { topRated } from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useTopRated = () => {
  const [movies, setMovies] = useState<any>([]);
  const [errors, setErrors] = useState<string>("");

  const { data: dataFilm, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: topRated,
  });

  return { movies, isLoading, errors, dataFilm };
};
