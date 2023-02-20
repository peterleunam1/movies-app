import { FC } from "react";
import { Accordion, Icon } from "@/components";
import { FilterStyled, SecondaryContainer } from "@/styled-components";
import { FilterInterface } from "./filter.model";

const options = [
  {
    id: 1,
    name: "Peliculas",
    fill: "fa-solid fa-film",
    default_checked: true,
    opc: "movie",
  },
  {
    id: 2,
    name: "Series de TV",
    fill: "fa-solid fa-tv",
    default_checked: false,
    opc: "tv",
  },
];
const frecuence = [
  {
    id: 1,
    name: "Diario",
    fill: "fa-solid fa-calendar-day",
    default_checked: true,
    opc: "day",
  },
  {
    id: 2,
    name: "Semanal",
    fill: "fa-solid fa-calendar-week",
    default_checked: false,
    opc: "week",
  },
];

const Filter: FC<FilterInterface> = ({ setValue, setFrecuence }) => {
  return (
    <SecondaryContainer>
      <FilterStyled>
        <span>
          <Icon
            fill="fa-solid fa-filter"
            color="var(--secondary)"
            size="25px"
            withTooltip={false}
          />
          <h2>Filter</h2>
        </span>

        <Accordion title="Mostrar por" height="1.5625rem" withButton={false}>
          <div>
            {options.map(({ fill, name, id, default_checked, opc }) => {
              return (
                <label htmlFor="" key={id} onClick={() => setValue(opc)}>
                  <input
                    type="radio"
                    name="filter"
                    value={name}
                    defaultChecked={default_checked}
                  />
                  <Icon
                    fill={fill}
                    size="13px"
                    color="#586b91"
                    withTooltip={false}
                  />
                  <p>{name}</p>
                </label>
              );
            })}
          </div>
        </Accordion>
        <Accordion title="Frecuencia" height="1.5625rem" withButton={false}>
          <div>
            {frecuence.map((option) => {
              return (
                <label
                  htmlFor=""
                  key={option.id}
                  onClick={() => setFrecuence(option.opc)}
                >
                  <input
                    type="radio"
                    name="xd"
                    value={option.name}
                    defaultChecked={option.default_checked}
                  />
                  <Icon
                    fill={option.fill}
                    size="13px"
                    color="#586b91"
                    withTooltip={false}
                  />
                  <p>{option.name}</p>
                </label>
              );
            })}
          </div>
        </Accordion>
      </FilterStyled>
    </SecondaryContainer>
  );
};
export default Filter;
