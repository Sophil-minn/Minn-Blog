import Modularization from "../Modularization";
import Componentization from "../Componentization";
import ModularizationHistory from "../ModularizationHistory";
import { ComponentsMap } from "./types";
import WebDevStandard from "../WebDevStandard";

export const componentsMap: ComponentsMap = {
  modularization: () => <Modularization />,
  modularizationHistory: () => <ModularizationHistory />,
  componentization: () => <Componentization />,
  webDevStandard: () => <WebDevStandard />,
};
