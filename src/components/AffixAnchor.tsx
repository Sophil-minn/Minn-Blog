import { useContext, useRef } from 'react'
import { GlobalContext } from '../App';
import { Affix, Anchor, Tooltip } from 'antd';
import { AnchorItemProps } from '../types';

export default function AffixAnchor({ anchorItems }: { anchorItems?: AnchorItemProps[] }) {
  const ref = useRef();
  const { targetOffset } = useContext(GlobalContext) as any;
  const loop = (arr: AnchorItemProps[]): Record<string, any>[] =>
    (arr || []).map((v: Record<string, any>) =>
      ({ ...v, title: v.tooltip ? <Tooltip title={v.title}>{v.title}</Tooltip> : v.title, children: loop(v.children) })
    );
  const items = anchorItems && loop(anchorItems);
  return (
    <Affix offsetTop={targetOffset - 26} style={{ overflow: 'auto' }}>
      <Anchor
        affix
        offsetTop={targetOffset - 26}
        targetOffset={targetOffset - 30}
        items={items as any}
        direction="vertical"
        style={{ height: "calc(100vh - 70px)", overflow: 'auto' }}
      />
    </Affix>
  )
}
