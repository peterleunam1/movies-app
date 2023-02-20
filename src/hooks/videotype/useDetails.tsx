import { useEffect, useState } from "react";
import { Details } from "@/models";
import { getDetails } from "@/services";
import useTranslateParams from "../useTranslateParams";

export default function useDetails() {
    const { id, parameter } = useTranslateParams();
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<Details>();

    useEffect(() => {
        setLoading(true);
        getDetails(id, parameter).then((res) => {
          setDetail(res);
          setLoading(false);
        });
      }, [id]);

    return { detail, loading };

}