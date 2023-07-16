import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

export default function CDemo() {
  const { id } = useParams<{ id: componentsDevelopment.RouteIdEnum }>();
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? Comp : <div>组件库开发</div>}
    </div>
  )
}
