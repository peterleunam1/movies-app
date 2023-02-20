import { FC } from "react";
import { Icon } from "@/components";
import { RateContainer } from "@/styled-components";
import { RateInterface } from "./rate.model";

const Rate: FC<RateInterface> = ({ vote_average, top, right }) => {
  if (vote_average >= 9)
    return (
      <RateContainer top={top} right={right}>
        <span>
          <Icon
            fill="fa-solid fa-star"
            size="15px"
            color="gold"
            withTooltip={false}
          />
          <Icon
            fill="fa-solid fa-star"
            size="15px"
            color="gold"
            withTooltip={false}
          />
          <Icon
            fill="fa-solid fa-star"
            size="15px"
            color="gold"
            withTooltip={false}
          />
          <Icon
            fill="fa-solid fa-star"
            size="15px"
            color="gold"
            withTooltip={false}
          />
          <Icon
            fill="fa-solid fa-star"
            size="15px"
            color="gold"
            withTooltip={false}
          />
        </span>
      </RateContainer>
    );
  if (vote_average >= 6 && vote_average < 9)
    return (
      <RateContainer top={top} right={right}>
        <span>
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        </span>
      </RateContainer>
    );
  if (vote_average >= 4 && vote_average < 6)
    return (
      <RateContainer top={top} right={right}>
        <span>
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        </span>
      </RateContainer>
    );
  if (vote_average >= 2 && vote_average < 4)
    return (
      <RateContainer top={top} right={right}>
        <span>
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        </span>
      </RateContainer>
    );
  if (vote_average > 0 && vote_average < 2)
    return (
      <span>
        <RateContainer top={top} right={right}>
          <Icon fill="fa-solid fa-star" size="15px" color="gold" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
          <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        </RateContainer>
      </span>
    );
  return (
    <RateContainer top={top} right={right}>
      <span>
        <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
        <Icon fill="fa-solid fa-star" size="15px" color="#808080" />
      </span>
    </RateContainer>
  );
};
export default Rate;
