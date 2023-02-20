import { useState } from "react";
import useTranslateParams from "./useTranslateParams";
import useAiringToday from "./videotype/useAiringToday";
import useCurrentlyOnAir from "./videotype/useCurrentlyOnAir";
import useNowPlaying from "./videotype/useNowPlaying";
import usePopular from "./videotype/usePopular";
import useTopRated from "./videotype/useTopRated";
import useUpcoming from "./videotype/useUpcoming";

export default function useAllCategories() {
    const [loading, setLoading] = useState(false);

  const { parameter } = useTranslateParams();
  const { popular } = usePopular(setLoading);
  const { topRated } = useTopRated(parameter);
  const { nowPlaying } = useNowPlaying();
  const { airingToday } = useAiringToday();
  const { upcoming } = useUpcoming();
  const { currentlyOnAir } = useCurrentlyOnAir();

  return {
    popular,
    topRated,
    nowPlaying,
    airingToday,
    upcoming,
    currentlyOnAir,
    loading,
  };
}
