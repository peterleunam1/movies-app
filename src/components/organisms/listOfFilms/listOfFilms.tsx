import { FC } from "react";
import { Film } from "@/components";
import { WithFilter, WithScroll, Normal } from "@/styled-components";
import { ListOfFilmsInterface } from "./listOfFilms.model";

const ListOfFilms: FC<ListOfFilmsInterface> = ({ type, results, gap }) => {
  if (type == "withScroll") {
    return (
      <WithScroll>
        {results.map((film, index) => {
          return <Film key={index} {...film} />;
        })}
      </WithScroll>
    );
  } else if (type == "withFilter") {
    return (
      <WithFilter>
        {results.map((film, index) => {
          return <Film key={index} {...film} />;
        })}
      </WithFilter>
    );
  }
  return (
    <Normal gap={gap}>
      {results.map((film, index) => {
        return <Film key={index} {...film} />;
      })}
    </Normal>
  );
};
export default ListOfFilms;
