import { getCredits } from "@/services";
import { useEffect, useState } from "react";
import useTranslateParams from "./useTranslateParams";
import {ListCast, Reviews} from "@/models"
import {getReviews} from "@/services";

export default function useReviews(language: string = "es") {
  const { id, parameter } = useTranslateParams();
  const [reviews, setReviews] = useState<Reviews>();

  useEffect(() => {
    getReviews(parameter, id, language).then((res) => {
      setReviews(res);
    });
  }, [language]);
  return { reviews };
}
