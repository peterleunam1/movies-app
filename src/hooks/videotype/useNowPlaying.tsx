import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getMediaTypesbyCategory } from "@/services";

export default function useNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<ListFilms>();
  useEffect(() => {
    getMediaTypesbyCategory({ category: "now_playing", mediaType: "movie" }).then(
      (res) => {
        setNowPlaying(res);
      }
    );
  }, []);

  return { nowPlaying };
}
