import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';

interface RouteParams {
  id: "optimization1" | "optimization2"
}

export default function CDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const comp = id ? componentsMap?.[id] : undefined;
  return (
    <div>
      {comp}
    </div>
  )
}
