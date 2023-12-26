import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';

import './index.scss';

interface tagProps extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  mColor?: string;
  visible?: boolean;
  onClose?: Function;
}


const Tag = (props: tagProps) => {
  const {
    className,
    children,
    closable,
    color,
    mColor,
    onClose,
    ...others
  } = props;
  const [visible, setVisible] = useState<boolean>(true);
  const customColor = color && color.match(/^#/);
  const cls = classNames({
    'ant-tag': true,
    [`ant-tag-${color}`]: color && !customColor,
    [`ant-tag-${mColor}`]: mColor && !customColor,
    [className as string]: !!className
  });

  const style: React.CSSProperties = { ...props.style };
  if (customColor) {
    style.backgroundColor = color;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in props)) {
      setVisible(false);
    }
  }
  if (!visible) {
    return null;
  }
  return <span {...others} className={cls} style={style}>
    {children}
    {closable ? <CloseOutlined
      onClick={handleClick}
    /> : null}

  </span>
}

export default Tag;