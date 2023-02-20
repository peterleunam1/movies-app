import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Films } from "@/models";
import { useTranslateParams } from "@/hooks";
import { Icon, Rate } from "@/components";
import { FilmContainer } from "@/styled-components";
import { BASE_IMAGE, IMAGE_NOT_FOUND } from "@/utilities";

const Film: FC<Films> = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  name,
  first_air_date,
}) => {
  const { title: type } = useTranslateParams();

  return (
    <Link href={`/${name ? "series" : "peliculas"}/${id}`}>
      <FilmContainer>
        <figure>
          <Image
            src={
              poster_path
                ? `${BASE_IMAGE}/w500${poster_path}`
                : `${IMAGE_NOT_FOUND}`
            }
            height={250}
            width={180}
            alt={title || name || "No image"}
            style={{ borderRadius: "8px" }}
            loading="lazy"
          />
        </figure>
        <figcaption>
          {release_date && <p>{release_date}</p>}
          {first_air_date && <p>{first_air_date}</p>}
          <div />
          <span>
            <Icon
              fill="fa-solid fa-clapperboard"
              size="13px"
              withTooltip={false}
            />
            {name ? <p>Tv serie</p> : <p>Película</p>}
          </span>
        </figcaption>
        {title && <h3>{title}</h3>}
        {name && <h3>{name}</h3>}
        <Rate vote_average={vote_average} top=".3125rem" right=".3125rem" />
      </FilmContainer>
    </Link>
  );
};

export default Film;
