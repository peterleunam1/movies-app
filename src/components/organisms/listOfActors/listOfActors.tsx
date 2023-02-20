import { FC } from "react";
import { useCast } from "@/hooks";
import { Actor } from "@/components";
import { Normal } from "@/styled-components";

const ListOfActors: FC = () => {
  const { cast } = useCast();
  const castNew = cast?.cast.slice(0, 12);
  return (
    <Normal>
      {castNew && (
        <>
          {castNew?.map((actor, index) => {
            return <Actor key={index} {...actor} />;
          })}
        </>
      )}
    </Normal>
  );
};
export default ListOfActors;
