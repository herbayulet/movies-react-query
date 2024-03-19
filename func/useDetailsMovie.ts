import { detailsMovie } from "@/service/api";
import { addWatchlist } from "@/service/watchList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useDetailMovie = (id: any) => {
  const client = useQueryClient();
  const {
    data: detailsFilm,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => detailsMovie(id),
  });

  const [tekan, setTekan] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationFn: () => addWatchlist(id),
    onSuccess: () => {
      setTekan(!tekan);
      client.invalidateQueries(["watchlist"]);
    },
    onError: () => {
      console.log("yahahaha gabisa");
    },
  });

  return {
    detailsFilm,
    isLoading,
    error,
    tekan,
    setTekan,
    mutate,
  };
};
