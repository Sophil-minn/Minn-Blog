import React from 'react'
import { useParams } from 'react-router-dom';
import { RouteParams, componentsMap } from './config';

export default function CDemo() {
  const { id } = useParams() as unknown as RouteParams;
  const comp = id ? componentsMap?.[id] : undefined;
  return (
    <div>
      {comp}
    </div>
  )
}
