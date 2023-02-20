import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getMediaTypesbyCategory } from "@/services";

export default function useUpcoming() {
  const [upcoming, setUpcoming] = useState<ListFilms>();
  useEffect(() => {
    getMediaTypesbyCategory({ category: "upcoming", mediaType: "movie" }).then(
      (res) => {
        setUpcoming(res);
      }
    );
  }, []);

  return { upcoming };
}
