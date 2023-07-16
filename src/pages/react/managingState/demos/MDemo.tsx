import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

interface RouteParams {
  [key: string]: string | undefined,
  id: managingStateProps.RouteIdEnum
}

export default function MDemo() {
  const { id } = useParams<RouteParams>();

  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : null}
    </div>
  )
}
