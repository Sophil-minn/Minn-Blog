import { Card, Skeleton, Spin } from 'antd';
import { Children, FC, Suspense } from 'react';

interface SpinLoadingProps {
  tip?: string;
  children: React.ReactNode;
}

const SpinLoading: FC<SpinLoadingProps> = ({ tip, children }) => {
  return (
    <Suspense fallback={<Card>
      <Spin tip={tip}><Skeleton active /></Spin>
    </Card>}>
      {children}
    </Suspense>

  );
};

export default SpinLoading;
