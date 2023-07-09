import { getMenuItem } from '../../util/config';
import { MenuItem } from '../react/apiPractice/types';
import { DATA_STRUCTURE, ALGORITHM } from './const';
import DataStructure from './DataStructure';
import Algorithm from './Algorithm';

export const rootSubmenuKeys = [''];

export const items: MenuItem[] = [
  getMenuItem('数据结构', `/dataStructureAlgorithm/${DATA_STRUCTURE}`, DATA_STRUCTURE),
  getMenuItem('算法', `/dataStructureAlgorithm/${ALGORITHM}`, ALGORITHM),
];

interface ComponentsMap {
  [ALGORITHM]: React.FC;
  [DATA_STRUCTURE]: React.FC;
}

export const componentsMap: ComponentsMap = {
  [ALGORITHM]: () => <Algorithm />,
  [DATA_STRUCTURE]: () => <DataStructure />,
};

