import Modularization from "../modularization";
import Componentization from "../componentization";
import { ComponentsMap } from "./types";
import ModularizationHistory from "../modularization/ModularizationHistory";


export const componentsMap: ComponentsMap = {
  modularization: () => <Modularization />,
  modularizationHistory: () => <ModularizationHistory />,
  componentization: () => <Componentization />,
};
