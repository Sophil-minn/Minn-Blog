import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import { LIBARY_DEV, COMPONENT_SETTLE_DWON, COMPONENT_THEORY, DEV_ENVIROMENT, COMPONENT_ENGINERING } from './const';

interface RouteParams {
  id: typeof LIBARY_DEV | typeof COMPONENT_SETTLE_DWON | typeof COMPONENT_THEORY | typeof DEV_ENVIROMENT | typeof COMPONENT_ENGINERING
}

export default function CDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : <div>组件库开发</div>}
    </div>
  )
}
