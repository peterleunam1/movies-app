import { useEffect, useState } from "react";
import { Videos } from "@/models";
import { getVideos } from "@/services";
import useTranslateParams from "../useTranslateParams";

export default function useVideos() {
  const { parameter, id } = useTranslateParams();
  const [videos, setVideos] = useState<Videos>();
  
  useEffect(() => {
    getVideos(parameter, id).then((res) => {
      setVideos(res);
    });
  }, [parameter, id]);
  return { videos };
}
