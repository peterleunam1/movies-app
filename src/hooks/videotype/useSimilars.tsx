import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import useTranslateParams from "../useTranslateParams";
import getSimilars from "@/services/getSimilars";

export default function useSimilars() {
  const { parameter, id, title } = useTranslateParams();
  const [similars, setSimilars] = useState<ListFilms>();
  useEffect(() => {
    getSimilars(parameter, id).then((res) => {
      setSimilars(res);
    });
  }, [id]);
  return { similars, title };
}
