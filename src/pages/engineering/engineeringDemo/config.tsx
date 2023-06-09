import Modularization from "../Modularization";
import Componentization from "../Componentization";
import ModularizationHistory from "../ModularizationHistory";
import { ComponentsMap } from "./types";
import WebDevStandard from "../WebDevStandard";
import TemplateCli from "../TemplateCli";
import { COMPONENTIZATION, MODULARIZATION, MODULARIZATION_HISTORY, TEMPLATE_CLI, WEB_DEV_STANDARD } from "./const";

export const componentsMap: ComponentsMap = {
  [MODULARIZATION]: () => <Modularization />,
  [MODULARIZATION_HISTORY]: () => <ModularizationHistory />,
  [COMPONENTIZATION]: () => <Componentization />,
  [WEB_DEV_STANDARD]: () => <WebDevStandard />,
  [TEMPLATE_CLI]: () => <TemplateCli />,
};
