import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getMediaTypesbyCategory } from "@/services";

export default function useAiringToday() {
  const [airingToday, setAiringToday] = useState<ListFilms>();
  useEffect(() => {
    getMediaTypesbyCategory({ category: "airing_today", mediaType: "tv" }).then(
      (res) => {
        setAiringToday(res);
      }
    );
  }, []);

  return { airingToday };
}
