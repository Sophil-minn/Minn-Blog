import { QuestionItemProps } from "../pages/react/ReactTheory/types";

export const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `min-${suffixCls}` : 'min';
};

export function formatToTreeData(list: QuestionItemProps[], parentKey: number | string) {
  const arr = list.map((v: {question: string, key: number | string}, i: number) => ({title: v.question, key: `${parentKey}-${i}`}));
  return arr;
}
