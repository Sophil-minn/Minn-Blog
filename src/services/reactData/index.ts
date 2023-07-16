import { formatToTreeData } from "../../util/utils";
import { reactTheory } from "./initialData";

export const fetchReactData = (params: string) => new Promise(resolve => setTimeout(() => {
  return resolve(reactTheory as reactTheory.ReactTheoryProps);
}, 1000))

export const fetchReactData2 = (params: string) => new Promise(resolve => setTimeout(() => {
const treeData: any = Object.entries(reactTheory).map(([key, value], index) => {
  const { title, questionList } = value || {} as any;
  return { title, belongTo: key, key: `${index}-0`, children: formatToTreeData(questionList, `${index}-0`) }
});
resolve({ treeData, contentList: Object.values(reactTheory) , contentData: reactTheory?.[params] });

 
}, 1000))