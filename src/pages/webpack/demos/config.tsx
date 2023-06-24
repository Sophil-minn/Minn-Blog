import A from "./A";
import B from "./B";

interface ComponentsMap {
  A: React.FC,
  B: React.FC,
}


export const componentsMap: ComponentsMap = {
  A: () => <A />,
  B: () => <B />,
};
