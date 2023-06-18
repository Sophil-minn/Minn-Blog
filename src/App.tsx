import './index.css';
import { routeConfig } from './config/routerConfig';
import { useRoutes } from 'react-router-dom';
import Header from './block/header';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';

export const GlobalContext = createContext<{ targetOffset?: number | undefined }>({ targetOffset: 0 });

function App() {
  const routes = useRoutes(routeConfig);
  const topRef = useRef<{ getClientHeight: () => number }>();
  const [targetOffset, setTargetOffset] = useState<number>();


  // console.log('targetOffset: ', targetOffset);

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
        {routes}
      </GlobalContext.Provider>
    </div >
  );
}

export default App;
