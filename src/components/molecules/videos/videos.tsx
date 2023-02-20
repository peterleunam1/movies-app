import { FC } from "react";
import { useVideos } from "@/hooks";
import { ContainerVideos } from "@/styled-components";

const Videos: FC = () => {
  const { videos } = useVideos();

  const newArray = videos?.results
    .filter((video) => video.site === "YouTube")
    .slice(0, 4);

  return (
    <>
      {newArray?.length !== 0 && (
        <>
          <h2>Videos</h2>
          <ContainerVideos>
            {newArray?.map((video) => {
              return (
                <div>
                  <iframe
                    key={video.key}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    width="100%"
                    height={320}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    aria-controls="video"
                  ></iframe>
                </div>
              );
            })}
          </ContainerVideos>
        </>
      )}
    </>
  );
};
export default Videos;
