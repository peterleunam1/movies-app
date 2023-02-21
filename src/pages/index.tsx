import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { useTrendings } from "@/hooks";
import { Layout, Filter, ListOfFilms } from "@/components";
import { MainContainer } from "@/styled-components";

// {
//   session,
// }: InferGetServerSidePropsType<typeof getServerSideProps>
const Home = () => {
  const { films, setEntertaiment, setFrecuence, laoding } = useTrendings();

  return (
    <Layout title="Inicio" description="Inicio - trends">
      <h1>Tendencias</h1>
      <MainContainer justify="space-between" align="flex-start">
        {laoding ? (
          <h1>Cargando...</h1>
        ) : (
          <ListOfFilms type="withFilter" results={films?.results || []} />
        )}
        <Filter setValue={setEntertaiment} setFrecuence={setFrecuence} />
      </MainContainer>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session)
//     return {
//       redirect: {
//         destination: "/inicia-sesion",
//         permanent: false,
//       },
//     };

//   return {
//     props: {
//       session,
//     },
//   };
// };
export default Home;
