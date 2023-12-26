
export const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `min-${suffixCls}` : 'min';
};

export function formatToTreeData(list: reactTheory.QuestionItemProps[], parentKey: number | string) {
  const arr = list.map((v: {question: string, key: number | string}, i: number) => ({title: v.question, key: `${parentKey}-${i}`}));
  return arr;
}
