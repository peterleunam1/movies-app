import { FC } from "react";
import { Avatar, Icon } from "@/components";
import { listIcons } from "@/utilities";
import { Nav } from "@/styled-components";
import { NavbarInterface } from "./navbar.model";

const Navbar: FC<NavbarInterface> = ({ title }) => {
  return (
    <Nav>
      <div>
        <Icon
          fill="fa-solid fa-clapperboard"
          color="var(--secondary)"
          path="/"
          withTooltip={false}
        />
        <ul>
          {listIcons.map(({ fill, tooltip, path }, index) => {
            return (
              <li key={index}>
                <Icon
                  fill={fill}
                  tooltip={tooltip}
                  path={path}
                  color={title !== tooltip ? "#586b91" : "#fff"}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Avatar />
    </Nav>
  );
};
export default Navbar;
