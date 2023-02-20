import { FC } from "react";
import { signOut } from "next-auth/react";
import { useScrollY } from "@/hooks";
import { Icon } from "@/components";
import { HeaderStyled } from "@/styled-components";
import { HeaderInterface } from "./header.model";

const Header: FC<HeaderInterface> = ({ children }) => {
  const { scroll } = useScrollY();

  const Options = {
    position: "fixed",
    bshadow: "  0px 2px 5px 0px rgba(88,107,145,1)",
    top: "0",
    left: "0",
    justify: "center",
    height: "3.75rem",
  };

  return (
    <HeaderStyled
      bshadow={scroll ? Options.bshadow : "none"}
      position={scroll ? Options.position : "unset"}
      top={scroll ? Options.top : "unset"}
      left={scroll ? Options.left : "unset"}
      justify={scroll ? Options.justify : "space-between"}
      height={scroll ? Options.height : "2.5rem"}
    >
      <div>
        <span>
          <Icon
            fill="fa-solid fa-magnifying-glass"
            size="20px"
            withTooltip={false}
          />
        </span>
        <span>{children}</span>
      </div>

      <span onClick={() => signOut()}>
        <Icon
          fill="fa-solid fa-arrow-right-from-bracket"
          tooltip="Salir"
          hover={`var(--secondary)`}
        />
      </span>
    </HeaderStyled>
  );
};
export default Header;
