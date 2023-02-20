import { FC } from "react";
import { ResultReviews } from "@/models";
import { toCapitalize } from "@/utilities";
import { ReviewStyles } from "@/styled-components";

const Review: FC<ResultReviews> = ({ author, updated_at, content }) => {
  return (
    <ReviewStyles>
      <span>
        <h3>{toCapitalize(author || "")}</h3>
        <p>{content}</p>
        <cite>{updated_at}</cite>
      </span>
    </ReviewStyles>
  );
};
export default Review;
