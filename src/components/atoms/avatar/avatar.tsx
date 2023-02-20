import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

const Avatar: FC = () => {
  const { data: session } = useSession();
  const image: any = session?.user?.image;

  return (
    <>
      {session?.user?.image && (
        <Image
          src={image}
          alt={session.user.name || "user"}
          width={40}
          height={40}
          loading="lazy"
          style={{ borderRadius: "50%", border: "2px solid #fff" }}
        />
      )}
    </>
  );
};
export default Avatar;
