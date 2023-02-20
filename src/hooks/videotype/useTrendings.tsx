import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getTrendings } from "@/services";

export default function useTrendings() {
  const [films, setFilms] = useState<ListFilms>();
  const [entertainment, setEntertaiment] = useState<string>("movie");
  const [frecuence, setFrecuence] = useState<string>("day");
  const [laoding, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getTrendings(entertainment, frecuence).then((element) => {
      setFilms(element);
      setLoading(false);
    });
  }, [frecuence, entertainment]);

  return { films, setEntertaiment, setFrecuence, laoding };
}
