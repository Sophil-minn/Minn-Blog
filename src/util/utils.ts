const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `min-${suffixCls}` : 'min';
};

export {defaultGetPrefixCls};