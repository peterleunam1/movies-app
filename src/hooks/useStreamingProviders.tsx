import { Flatrate } from "@/models";
import { getProviders } from "@/services";
import { useEffect, useState } from "react";
import useTranslateParams from "./useTranslateParams";

export default function useStreamingProviders() {
  const { id, parameter } = useTranslateParams();
  const [streamingProvider, setStreamingProvider] = useState<Array<Flatrate>>();
  useEffect(() => {
    getProviders(parameter, id).then((res) => {
      setStreamingProvider(res);
    });
  }, []);
  return { streamingProvider };
}
