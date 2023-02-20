import { lazy, Suspense } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/legacy/image";
import { getSession } from "next-auth/react";
import { useDetails, useSimilars } from "@/hooks";
import { Accordion, Layout, MediaDetails, Videos } from "@/components";
import {
  BASE_IMAGE,
  IMAGE_NOT_FOUND,
  paramToString,
  toCapitalize,
} from "@/utilities";
import { Figure, MainContainer, Wrapper } from "@/styled-components";
const ListOfFilms = lazy(
  () => import("@/components/organisms/listOfFilms/listOfFilms")
);
const ListOfActors = lazy(
  () => import("@/components/organisms/listOfActors/listOfActors")
);
const ListOfReviews = lazy(
  () => import("@/components/organisms/listOfReviews/listOfReviews")
);

export default function DetailPage({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { detail, loading } = useDetails();
  const { similars, title } = useSimilars();
  const titleId = paramToString(detail?.id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout title={titleId} description={detail?.title || detail?.name || ""}>
        <MainContainer
          justify="space-around"
          align="center"
          bg={true}
          urlImage={
            detail?.backdrop_path
              ? `${BASE_IMAGE}/w1280${detail?.backdrop_path}`
              : `${BASE_IMAGE}/w1280${detail?.poster_path}`
          }
          height="84vh"
        >
          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            <Figure>
              <Image
                src={
                  detail?.poster_path
                    ? `${BASE_IMAGE}/w300_and_h450_bestv2/${detail?.poster_path}`
                    : `${IMAGE_NOT_FOUND}`
                }
                alt={detail?.title || detail?.name || ""}
                width={300}
                height={450}
                layout="responsive"
                style={{ borderRadius: "8px" }}
              />
            </Figure>
          )}

          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            <MediaDetails detail={detail!} type="complete" />
          )}
        </MainContainer>

        <MainContainer justify="space-between" align="flex-start" pt="2.5rem">
          <Wrapper w="80%">
            <h2>Reparto</h2>
            <Accordion
              title="Actores principales"
              height="280px"
              wChildren="97%"
              w="95%"
              withButton={true}
            >
              <ListOfActors />
            </Accordion>
          </Wrapper>
          <MediaDetails type="short" detail={detail!} />
        </MainContainer>

        <Videos />
        <ListOfReviews />

        <h2>{`${toCapitalize(title)} similares ...`}</h2>
        <ListOfFilms type="withScroll" results={similars?.results || []} />
      </Layout>
    </Suspense>
  );
}
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
