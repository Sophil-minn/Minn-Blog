import React from 'react'
import { useParams } from 'react-router-dom';
import { RouteParams, componentsMap } from './config';

export default function CDemo() {
  const { id } = useParams<{ id: performanceOptimization.RouteIdEnum }>();
  const comp = id ? componentsMap?.[id] : undefined;
  return (
    <div>
      {comp}
    </div>
  )
}
