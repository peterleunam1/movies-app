import { FC } from "react";
import { Rate, StreamingProviders } from "@/components";
import {
  Genre,
  Overview,
  Slogan,
  Text,
  Title,
  Wrapper,
} from "@/styled-components";
import { MediaDetailsInterface } from "./mediaDetails.model";

const MediaDetails: FC<MediaDetailsInterface> = ({ detail, type }) => {
  return (
    <>
      {type === "complete" ? (
        <Wrapper w="60%">
          <Rate
            vote_average={detail?.vote_average || 0}
            top={"0"}
            right={"20px"}
          />
          <Genre mb="0px">
            {detail?.genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </Genre>
          <Title>{detail?.title || detail?.name}</Title>
          <Text maxWidth="86%">
            <strong>Título original: </strong>
            {detail?.original_title || detail?.original_name}
          </Text>
          <p>
            <strong>Fecha de estreno: </strong>
            {detail?.release_date || detail?.first_air_date}
          </p>
          {detail?.tagline && <Slogan>{`"${detail?.tagline}"`}</Slogan>}
          <Overview>{detail?.overview}</Overview>

          {StreamingProviders && <StreamingProviders />}
        </Wrapper>
      ) : (
        <Wrapper w="20%">
          <div>
            <h2>Detalles</h2>
            <Text>
              <strong>Estado:</strong>
              {detail?.status === "Released" ? "Estrenada" : "Sin estrenar"}
            </Text>
            <Text>
              <strong>Duración</strong>: {detail?.runtime} min.
            </Text>
            <Text>
              <strong>Popularidad:</strong>
              {detail?.popularity}
            </Text>
          </div>
          <div>
            <strong>Compañías de producción: </strong>
            <Genre>
              {detail?.production_companies?.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </Genre>
            <div>
              <strong>Países de producción: </strong>
              <Genre>
                {detail?.production_countries?.map((country) => (
                  <li key={country.iso_3166_1}>{country.name}</li>
                ))}
              </Genre>
            </div>
            <div>
              <strong>Palabras Claves:</strong>
              <Genre>
                {detail?.genres?.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </Genre>
            </div>
            <p>
              <strong>Lenguaje Original:</strong> {detail?.original_language}
            </p>
          </div>
        </Wrapper>
      )}
    </>
  );
};
export default MediaDetails;
