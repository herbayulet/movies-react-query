import { listWatchList } from "@/service/watchList";
import { useQuery } from "@tanstack/react-query";

export const useWatchList = () => {
  const { data: watchlist, isLoading } = useQuery({
    queryKey: ["watchlist"],
    queryFn: listWatchList,
  });

  return { watchlist, isLoading };
};
