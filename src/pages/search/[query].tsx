import { Layout, ListOfFilms } from "@/components";
import { useSearch } from "@/hooks";
import { MainContainer, Overview } from "@/styled-components";
import { paramToString } from "@/utilities";
import { useRouter } from "next/router";

export default function Searched() {
  const { query } = useRouter().query;
  const { movieSearch, tvSearch } = useSearch(paramToString(query));

  return (
    <Layout title="Searches" description="The users can do searches here">
      <h2>Búsquedas</h2>
      <MainContainer
        fDirection="column"
        justify="flex-start"
        align="flex-start"
        pt="1rem"
      >
        <Overview>
          Resultados para <strong>{query}</strong> en películas
        </Overview>
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
