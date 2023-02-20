import { Layout, ListOfFilms } from "@/components";
import { useSearch } from "@/hooks";
import { MainContainer, Overview } from "@/styled-components";
import { paramToString } from "@/utilities";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Searched = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter().query;
  const { movieSearch, tvSearch } = useSearch(paramToString(query));

  return (
    <Layout title="Searches" description="The users can do searches here">
      <h2>Búsquedas</h2>
      <Overview>
        Resultados para <strong>{query}</strong> en películas
      </Overview>
      <MainContainer
        fDirection="column"
        justify="flex-start"
        align="flex-start"
        pt="1rem"
      >
        <ListOfFilms
          type="normal"
          results={movieSearch?.results || []}
          gap="50px"
        />
      </MainContainer>
      <MainContainer
        fDirection="column"
        justify="flex-start"
        align="flex-start"
        pt="1rem"
      >
        <Overview>
          Resultados para <strong>{query}</strong> en series de tv
        </Overview>
        <ListOfFilms
          type="normal"
          results={tvSearch?.results || []}
          gap="50px"
        />
      </MainContainer>
    </Layout>
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
export default Searched;  
