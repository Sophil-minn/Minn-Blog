import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

interface RouteParams {
  id: "A" | "B"
}

export default function CDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {Comp ? <Comp /> : null}
    </div>
  )
}
