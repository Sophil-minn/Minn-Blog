import './index.css';
import { routeConfig } from './config/routerConfig';
import { useRoutes } from 'react-router-dom';
import Header from './home/header';
import { useCallback } from 'react';
// import { Button } from 'antd';

function App() {
  const routes = useRoutes(routeConfig);
  const onSearch = useCallback((e: any) => {
    console.log('value: ', e.target.value);
  }, [])

  return (
    <div className="App">
      <Header onSearch={onSearch} />
      {routes}
      {/* <Button>ann</Button> */}
      {/* <Button type="primary">Button</Button> */}

    </div>
  );
}

export default App;
