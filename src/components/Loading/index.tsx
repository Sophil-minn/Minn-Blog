import { Skeleton } from 'antd'
import { SkeletonTitleProps } from 'antd/es/skeleton/Title';
import React from 'react';

interface LoadingProps {
  loading: boolean;
  title?: SkeletonTitleProps | undefined | boolean;
  children?: null | undefined | React.ReactNode;
}

export default function index({ loading = false, children = null, title = false }: LoadingProps) {
  return loading ? <Skeleton title={title} active /> : <>{children}</>
}
