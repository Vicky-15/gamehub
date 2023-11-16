import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      });

    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;