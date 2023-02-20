import { FC } from "react";
import Image from "next/image";
import { BASE_IMAGE, IMAGE_NOT_FOUND } from "@/utilities";
import { ActorS } from "@/styled-components";
import { ActorInterface } from "./actor.model";

const Actor: FC<ActorInterface> = ({ name, character, id, profile_path }) => {
  return (
    <ActorS>
      <Image
        src={
          profile_path
            ? `${BASE_IMAGE}/w138_and_h175_face/${profile_path}`
            : `${IMAGE_NOT_FOUND}`
        }
        width="138"
        alt={name}
        height="175"
        style={{ borderRadius: ".5rem" }}
        loading="lazy"
      />
      <h4>{name}</h4>
      <p>{character}</p>
    </ActorS>
  );
};
export default Actor;
