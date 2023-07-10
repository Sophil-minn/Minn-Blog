
import Optimization1 from "./Optimization1";
import Optimization2 from "./Optimization2";

interface ComponentsMap {
  optimization1: React.ReactNode,
  optimization2: React.ReactNode,
}


export const componentsMap: ComponentsMap = {
  optimization1: <Optimization1 />,
  optimization2: <Optimization2 />,
};
