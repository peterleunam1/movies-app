import { paramToString } from "@/utilities";
import { useRouter } from "next/router";

export default function useTranslateParams() {
  const { videoType, detail } = useRouter().query;
  const title = paramToString(videoType);
  const id = parseInt(paramToString(detail));
  let parameter = "";
  title === "peliculas" && (parameter = "movie");
  title === "series" && (parameter = "tv");
  title === "movie" && (parameter = "movie");
  title === "tv" && (parameter = "tv");
  return { parameter, title, id };
}
