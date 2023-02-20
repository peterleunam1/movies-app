import { lazy, Suspense } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import {
  useAllCategoriesOfVideoType,
  useTranslateParams,
} from "@/hooks";
import { Layout } from "@/components";
import { toCapitalize } from "@/utilities";
import { Subtitle } from "@/styled-components";
const ListOfFilms = lazy(
  () => import("@/components/organisms/listOfFilms/listOfFilms")
);

const IndexVideoType = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const { title, parameter } = useTranslateParams();
  const {
    airingToday,
    currentlyOnAir,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    loading,
  } = useAllCategoriesOfVideoType();
  // const {loading, popular} = usePopular()

  if (typeof window !== "undefined") {
    if (parameter !== "movie" && parameter !== "tv") {
      router.push("/");
    }
  }
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Layout title={toCapitalize(title) || ""} description="Movies-app">
        <h1>
          {title === "peliculas"
            ? toCapitalize(title)
            : `${toCapitalize(title)} de TV`}
        </h1>
        <Subtitle>Más populares...</Subtitle>
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <ListOfFilms type="withScroll" results={popular?.results || []} />
        )}
        <Subtitle>Aclamadas por la crítica...</Subtitle>
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <ListOfFilms type="withScroll" results={topRated?.results || []} />
        )}
        {parameter === "movie" && (
          <>
            <Subtitle>Mas reproducidas en el momento...</Subtitle>
            <ListOfFilms
              type="withScroll"
              results={nowPlaying?.results || []}
            />
            <Subtitle>Próximas películas a cine...</Subtitle>
            <ListOfFilms type="withScroll" results={upcoming?.results || []} />
          </>
        )}
        {parameter === "tv" && (
          <>
            <Subtitle>Series de Tv al aire hoy...</Subtitle>
            <ListOfFilms
              type="withScroll"
              results={airingToday?.results || []}
            />
            <Subtitle>Series de Tv actualmente al aire...</Subtitle>
            <ListOfFilms
              type="withScroll"
              results={currentlyOnAir?.results || []}
            />
          </>
        )}
      </Layout>
    </Suspense>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/inicia-sesion",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
export default IndexVideoType;
