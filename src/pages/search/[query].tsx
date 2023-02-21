import { Layout, ListOfFilms } from "@/components";
import { useSearch } from "@/hooks";
import { Content, MainContainer, Overview } from "@/styled-components";
import { paramToString } from "@/utilities";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Searched = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter().query;
  const { movieSearch, tvSearch, loading } = useSearch(paramToString(query));

  return (
    <Layout title="Searches" description="The users can do searches here">
      <h2>Búsquedas</h2>
      <Content>
        <p>
          Resultados para <strong>{query}</strong> en películas
        </p>

        {loading ? (
          <h1>Cargando...</h1>
        ) : movieSearch?.results?.length !== 0 ? (
          <ListOfFilms
            type="normal"
            results={movieSearch?.results || []}
            gap="50px"
          />
        ) : (
          <h3>404 - No se encontraron resultados</h3>
        )}
      </Content>

      <Content mt="2.375rem">
        <p>
          Resultados para <strong>{query}</strong> en series de tv
        </p>
        {loading ? (
          <h1>Cargando...</h1>
        ) : tvSearch?.results?.length !== 0 ? (
          <ListOfFilms
            type="normal"
            results={tvSearch?.results || []}
            gap="50px"
          />
        ) : (
          <h3>404 - No se encontraron resultados</h3>
        )}
      </Content>
    </Layout>
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
export default Searched;
