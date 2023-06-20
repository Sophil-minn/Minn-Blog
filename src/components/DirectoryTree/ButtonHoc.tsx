import { memo } from "react";
import { Button } from "antd";
import { ICON_ACTIVE_MAP, ICON_MAP } from "./config";
import { ICON_ADD_TYPE } from "./const";

function ButtonHoc({ iconType = ICON_ADD_TYPE, onClickCallback = () => { }, active = false }) {
  const onClick = (e: any) => {
    e.stopPropagation();
    onClickCallback();
  }
  // 点击按钮弹出弹窗时，处于激活状态，否则恢复默认
  const iconMap: Record<string, React.ReactNode> = active ? ICON_ACTIVE_MAP : ICON_MAP;
  return (
    <Button type="text" onClick={onClick} size="small" icon={iconMap?.[iconType]} />
  )
}

export default memo(ButtonHoc);
