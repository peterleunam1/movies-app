import { useEffect, useState } from "react";
import { ListFilms } from "@/models";
import { getMediaTypesbyCategory } from "@/services";
import useTranslateParams from "../useTranslateParams";

export default function usePopular(setLoading: (value:boolean) => void) {
const {parameter} = useTranslateParams()
  // const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState<ListFilms>();
  useEffect(() => {
    setLoading(true);
    getMediaTypesbyCategory({ category: "popular", mediaType: parameter }).then(
      (res) => {
        setPopular(res);
        setLoading(false);
      }
    );
  }, [parameter]);
  return { popular};
}
