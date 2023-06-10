import './index.css';
import { routeConfig } from './config/routerConfig';
import { useRoutes } from 'react-router-dom';
import { Button } from 'antd';

function App() {
  const routes = useRoutes(routeConfig);
  return (
    <div className="App">
      {routes}
      {/* <Button>ann</Button> */}
      <Button type="primary">Button</Button>

    </div>
  );
}

export default App;
