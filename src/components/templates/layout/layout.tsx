import { FC, useState } from "react";
import Head from "next/head";
import { LayoutInterface } from "./layout.model";
import { Header, Navbar } from "@/components";
import { ContainerLayout, FormStyled } from "@/styled-components";
import { useScrollY } from "@/hooks";
import { useRouter } from "next/router";

const Layout: FC<LayoutInterface> = ({ title, description, children }) => {
  const { scroll } = useScrollY();
  const [query, setQuery] = useState<string>("");
  const router = useRouter().push;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !query && alert("Please enter a movie or Tv series");
    router(`/busqueda/${query}`);
  };
  return (
    <>
      <Head>
        <title>{title} - Movies-app</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>
      <ContainerLayout>
        <Navbar title={title} />
        <main>
          {title !== "Guardado" && (
            <Header>
              <FormStyled focus={scroll ? false : true} onSubmit={HandleSubmit}>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Search for a movie or Tv series"
                />
              </FormStyled>
            </Header>
          )}
          {children}
        </main>
      </ContainerLayout>
    </>
  );
};

export default Layout;
