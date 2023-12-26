import routeConfig from '../config/routes';
import { useRoutes } from 'react-router-dom';
import Header from './block/header';
import { Suspense, createContext, useCallback, useEffect, useRef, useState } from 'react';
import { Skeleton, Spin } from 'antd';

export const GlobalContext = createContext<{ targetOffset?: number | undefined }>({ targetOffset: 0 });

function Index() {
  const routes = useRoutes(routeConfig);
  const topRef = useRef<{ getClientHeight: () => number }>();
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    const height = topRef.current?.getClientHeight() || 0;
    setTargetOffset(height + 32);
  }, []);
  const onSearch = useCallback((e: any) => {
    console.log('value: ', e.target.value);
  }, [])

  return (
    <div className="App">
      <Header onSearch={onSearch} ref={topRef} />
      <GlobalContext.Provider value={{ targetOffset }}>
        <Suspense fallback={<Spin tip="loading..."><Skeleton active /></Spin>}>
          {routes}
        </Suspense>
      </GlobalContext.Provider>
    </div >
  );
}

export default Index;
