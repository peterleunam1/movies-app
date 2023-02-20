import { FC } from "react";
import { ButtonStyled } from "@/styled-components";
import { ButtonInterface } from "./button.model";

const Button: FC<ButtonInterface> = ({ text, onClick }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
