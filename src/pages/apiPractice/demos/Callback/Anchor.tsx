import { useContext } from 'react'
import { GlobalContext } from '../../../../App';
import { Anchor, Tooltip } from 'antd';
import { anchorItems } from './config';

export default function Ancho() {
  const { targetOffset } = useContext(GlobalContext) as any;
  const loop = (arr: Record<string, any>[]): Record<string, any>[] =>
    (arr || []).map((v: Record<string, any>) =>
      ({ ...v, title: v.tooltip ? <Tooltip title={v.title}>{v.title}</Tooltip> : v.title, children: loop(v.children) })
      // ({ ...v, title: <Tooltip title={v.title}>{v.title}</Tooltip>, children: loop(v.children) })
    );
  const items = loop(anchorItems);
  return (
    <Anchor
      affix
      offsetTop={targetOffset - 26}
      targetOffset={targetOffset - 30}
      items={items as any}
    />
  )
}
