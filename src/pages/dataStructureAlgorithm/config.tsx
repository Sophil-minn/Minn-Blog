import { getMenuItem } from '../../util/config';
import { DATA_STRUCTURE, ALGORITHM } from './const';
import DataStructure from './DataStructure';
import Algorithm from './Algorithm';

export const rootSubmenuKeys = [''];

export const items: MenuItem[] = [
  getMenuItem('数据结构', `/dataStructureAlgorithm/${DATA_STRUCTURE}`, DATA_STRUCTURE),
  getMenuItem('算法', `/dataStructureAlgorithm/${ALGORITHM}`, ALGORITHM),
];


export const componentsMap: typeof dataStructureAlgorithm.ComponentsMap = {
  [ALGORITHM]: <Algorithm />,
  [DATA_STRUCTURE]: <DataStructure />,
};