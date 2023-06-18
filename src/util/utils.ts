import { QuestionItemProps } from "../reactTheory/types";

export const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `min-${suffixCls}` : 'min';
};

export function formatToTreeData(list: QuestionItemProps[], parentKey: number | string) {
  const arr = list.map((v: {question: string, key: number | string}, i: number) => ({title: v.question, key: `${parentKey}-${i}`}));
  return arr;
}


export const getTreeData = (data: any) => {
  const treeData = Object.entries(data).map(([key, value], index) => {
    const { title, questionList } = value || {} as any;
    return { title, belongTo: key, key: `${index}-0`, children: formatToTreeData(questionList, `${index}-0`) }
  });
}