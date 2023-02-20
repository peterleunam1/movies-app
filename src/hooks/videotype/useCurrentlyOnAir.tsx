import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getMediaTypesbyCategory } from "@/services";

export default function useCurrentlyOnAir() {
  const [currentlyOnAir, setCurrentlyOnAir] = useState<ListFilms>();
  useEffect(() => {
    getMediaTypesbyCategory({ category: "on_the_air", mediaType: "tv" }).then(
      (res) => {
        setCurrentlyOnAir(res);
      }
    );
  }, []);

  return { currentlyOnAir };
}
