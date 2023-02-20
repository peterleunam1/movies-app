import { getCredits } from "@/services";
import { useEffect, useState } from "react";
import useTranslateParams from "./useTranslateParams";
import {ListCast} from "@/models"

export default function useCast() {
  const { id, parameter } = useTranslateParams();
  const [cast, setCast] = useState<ListCast>();

  useEffect(() => {
    getCredits(id, parameter).then((res) => {
      setCast(res);
    });
  }, [id]);
  return { cast };
}
