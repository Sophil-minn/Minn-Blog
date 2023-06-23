import { ReactTheoryProps } from "../../pages/reactTheory/types";
import { formatToTreeData } from "../../util/utils";
import { reactTheory } from "./initialData";

export const fetchReactData = (params: string) => new Promise(resolve => setTimeout(() => {
  console.log('fetchReactData-params: ', params);
  return resolve(reactTheory as ReactTheoryProps);
}, 1000))

export const fetchReactData2 = (params: string) => new Promise(resolve => setTimeout(() => {
const treeData: any = Object.entries(reactTheory).map(([key, value], index) => {
  const { title, questionList } = value || {} as any;
  return { title, belongTo: key, key: `${index}-0`, children: formatToTreeData(questionList, `${index}-0`) }
});
// treeNode = {title: data.title, key: '0-0', children: formatToTreeData(data.questionList, '0-0')};
resolve({ treeData, contentList: Object.values(reactTheory) , contentData: reactTheory?.[params] });

 
}, 1000))