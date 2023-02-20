import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function IniciaSesion() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <>
      <button onClick={() => signIn("google")}>Iniciar sesion</button>
    </>
  );
}
