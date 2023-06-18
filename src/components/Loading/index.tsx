import { Skeleton } from 'antd'
import React from 'react';

interface LoadingProps {
  loading: boolean;
  children?: null | undefined | React.ReactNode;
}

export default function index({loading = false, children = null}: LoadingProps) {
  return loading ? <Skeleton active /> : <>{children}</>
}
