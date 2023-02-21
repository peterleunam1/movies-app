import { useEffect, useState } from "react";
import { ListFilms, OneFilm } from "@/models";
import { getMediaTypesbyCategory } from "@/services";
import getOneFilm from "@/services/getOneFilm";

export default function useSearch(query:string) {
  const [tvSearch, setTvSearch] = useState<ListFilms>();
  const [movieSearch, setMovieSearch] = useState<ListFilms>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOneFilm({ media_type: "tv", query: query }).then((res) => {
      setTvSearch(res);
      setLoading(false)
    });
    setLoading(true)
    getOneFilm({ media_type: "movie", query: query }).then((res) => {
      setMovieSearch(res);
      setLoading(false)
    });
  }, [query]);

  return { movieSearch, tvSearch, loading };
}
