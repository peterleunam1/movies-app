import { useEffect, useState } from "react";
import { ListFilms, OneFilm } from "@/models";
import { getMediaTypesbyCategory } from "@/services";
import getOneFilm from "@/services/getOneFilm";

export default function useSearch(query:string) {
  const [tvSearch, setTvSearch] = useState<ListFilms>();
  const [movieSearch, setMovieSearch] = useState<ListFilms>();
  useEffect(() => {
    getOneFilm({ media_type: "tv", query: query }).then((res) => {
      setTvSearch(res);
    });
    getOneFilm({ media_type: "movie", query: query }).then((res) => {
      setMovieSearch(res);
    });
  }, [query]);

  return { movieSearch, tvSearch };
}
