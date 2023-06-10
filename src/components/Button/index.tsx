import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Typography } from 'antd';
import './index.scss';

const { Text } = Typography;

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'normal' | 'primary' | "dashed" | "text" | "link";
  size?: "small" | "medium" | 'large';
  children?: ReactNode;
  style?: React.CSSProperties;
}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>((props: buttonProps, ref) => {
  const { children, size = 'medium', className, type = 'normal', style, ...others } = props;
  const cls = classNames({
    'min-btn': true,
    [`min-btn__${size}`]: size,
    [`min-btn__${type}`]: type,
    [className as string]: !!className
  });
  return (<button ref={ref} {...others} className={cls} style={style}>
    <Text type="secondary" strong>{children}</Text>
    </button>);
});

export default Button;