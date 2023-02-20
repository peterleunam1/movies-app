import { Icon } from "@/components";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MainLog, ContainerLogin } from "@/styled-components";
import GoogleImage from "../../public/assets/google.png";

export default function IniciaSesion() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <MainLog>
      <ContainerLogin />
      <article>
        <div>
          <Icon
            fill="fa-solid fa-clapperboard"
            color="var(--secondary)"
            path="/"
            withTooltip={false}
            size="3rem"
          />
          <h1>Movies app!</h1>
        </div>
        <h3>¡Bienvenid@!</h3>
        <p>
          Comienza el día con una buena dosis de entrenimiento, tus series y
          peliculas favoritas al precio de un click.
        </p>
        <button onClick={() => signIn("google")}>
          <Image src={GoogleImage} alt="google" width={35} height={35} />
          Iniciar sesión con google
        </button>
      </article>
    </MainLog>
  );
}
