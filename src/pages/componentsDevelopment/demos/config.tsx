import { LIBARY_DEV, COMPONENT_SETTLE_DWON, COMPONENT_THEORY, DEV_ENVIROMENT, ENGINERING } from "../const";
import ComponentSettleDown from "./ComponentSettleDown";
import ComponentTheory from "./ComponentTheory";
import DevEnviroment from "./DevEnviroment";
import Enginering from "./Enginering";
import LibaryDev from "./LibaryDev";

interface ComponentsMap {
  [LIBARY_DEV]: React.FC;
  [COMPONENT_SETTLE_DWON]: React.FC;
  [COMPONENT_THEORY]: React.FC;
  [DEV_ENVIROMENT]: React.FC;
  [ENGINERING]: React.FC;
}

export const componentsMap: ComponentsMap = {
  [LIBARY_DEV]: () => <LibaryDev />,
  [COMPONENT_SETTLE_DWON]: () => <ComponentSettleDown />,
  [COMPONENT_THEORY]: () => <ComponentTheory />,
  [DEV_ENVIROMENT]: () => <DevEnviroment />,
  [ENGINERING]: () => <Enginering />,
};

