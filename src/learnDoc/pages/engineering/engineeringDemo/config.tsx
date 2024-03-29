
import ModularizationHistory from "../ModularizationHistory";
import WebDevStandard from "../WebDevStandard";
import TemplateCli from "../TemplateCli";
import { COMPONENTIZATION, MODULARIZATION, MODULARIZATION_HISTORY, TEMPLATE_CLI, WEB_DEV_STANDARD } from "./const";
import Modularization from "../modularization";
import Componentization from "../componentization";

export const componentsMap: typeof engineering.ComponentsMap = {
  [MODULARIZATION]: () => <Modularization />,
  [MODULARIZATION_HISTORY]: () => <ModularizationHistory />,
  [COMPONENTIZATION]: () => <Componentization />,
  [WEB_DEV_STANDARD]: () => <WebDevStandard />,
  [TEMPLATE_CLI]: () => <TemplateCli />,
};
