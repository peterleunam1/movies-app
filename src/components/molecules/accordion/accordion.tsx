import { useState } from "react";
import { Button, Icon } from "@/components";
import { AcordeonContent, TitleA } from "@/styled-components";
import { AccordionInterface } from "./accordion.model";

export default function Accordion({
  title,
  children,
  height,
  wChildren,
  withButton,
  opened,
  mt,
  w,
}: AccordionInterface) {
  const initialState = opened ? true : false;
  const [isOpen, setIsOpen] = useState(initialState);

  return (
    <AcordeonContent
      overflow={isOpen ? "visible" : "hidden"}
      maxheight={isOpen ? "auto" : `${height}}`}
      wChildren={wChildren}
      mt={mt}
      width={w}
    >
      <TitleA
        onClick={!withButton ? () => setIsOpen(!isOpen) : () => {}}
        visibility={withButton ? "hidden" : "visible"}
      >
        {title}
      
          <Icon
            fill="fa-solid fa-caret-down"
            withTooltip={false}
            color="#586b91"
          />

      </TitleA>
      <div>{children}</div>
      {withButton && (
        <span>
          <Button
            text={` Mostrar ${isOpen ? "menos" : "más"}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </span>
      )}
    </AcordeonContent>
  );
}
