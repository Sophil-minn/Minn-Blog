import React from 'react'
import { defaultGetPrefixCls } from '../../util/utils';
import './index.scss';
import classnames from 'classnames';

export default function Container({ children, cls }: { children: React.ReactNode, cls?: string }) {

  const ccls = defaultGetPrefixCls('container');

  return (
    <div className={classnames(ccls, cls)}>
      {children}
    </div>
  )
}
