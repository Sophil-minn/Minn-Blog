import Modularization from "../modularization";
import Componentization from "../componentization";
import { ComponentsMap } from "./types";


export const componentsMap: ComponentsMap = {
  modularization: () => <Modularization />,
  componentization: () => <Componentization />,
};
