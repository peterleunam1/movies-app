import { FC } from "react";
import Image from "next/image";
import { useStreamingProviders } from "@/hooks";
import { BASE_IMAGE } from "@/utilities";
import { Streaming } from "@/styled-components";

const StreamingProvider: FC = () => {
  const { streamingProvider } = useStreamingProviders();

  return (
    <>
      {streamingProvider ? (
        <Streaming>
          {streamingProvider.map(
            ({ provider_id, logo_path, provider_name }) => {
              return (
                <span key={provider_id}>
                  <Image
                    src={`${BASE_IMAGE}/w45/${logo_path}`}
                    alt={provider_name}
                    width={45}
                    height={45}
                    loading="lazy"
                    style={{ borderRadius: "8px" }}
                  />
                  <h4>{provider_name}</h4>
                </span>
              );
            }
          )}
        </Streaming>
      ) : null}
    </>
  );
};
export default StreamingProvider;
