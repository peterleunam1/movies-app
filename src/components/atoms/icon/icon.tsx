import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Icons } from "@/models";
import { IconStyled } from "@/styled-components";

const Icon: FC<Icons> = ({
  fill,
  color,
  hover,
  path,
  size,
  tooltip,
  withTooltip = true,
}) => {
  const router = useRouter().push;
  const [tooltipActive, setTooltipActive] = useState(false);

  const handleClick = (): void => {
    if (path) router(path);
  };

  return (
    <>
      {withTooltip ? (
        <IconStyled
          className={fill}
          size={size || "1.125rem"}
          color={color || "#fff"}
          hover={hover}
          onClick={handleClick}
          textTooltip={tooltip}
          onMouseEnter={() => setTooltipActive(true)}
          onMouseLeave={() => setTooltipActive(false)}
          opacity={tooltipActive ? "1" : "0"}
        />
      ) : (
        <IconStyled
          className={fill}
          size={size || "1.125rem"}
          color={color || "#fff"}
          hover={hover}
          onClick={handleClick}
        />
      )}
    </>
  );
};
export default Icon;
