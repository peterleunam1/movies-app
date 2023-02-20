import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getMediaTypesbyCategory } from "@/services";

export default function usePopular(parameter: string) {
  const [topRated, setTopRated] = useState<ListFilms>();
  useEffect(() => {
    getMediaTypesbyCategory({ category: "top_rated", mediaType: parameter }).then(
      (res) => {
        setTopRated(res);
      }
    );
  }, [parameter]);

  return { topRated };
}
