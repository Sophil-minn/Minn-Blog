import MenuLabel from '../../components/MenuLabel';

// submenu keys of first level
export const rootSubmenuKeys = ['sub11', 'sub2', 'sub4'];

interface MenuItem {
  label: string | React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  title?: string;
}

function getItem(
  label: string,
  path: string,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <MenuLabel keypath={key} path={path} label={label} />,
    type,
    path
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem('图片懒加载', 'imgLazyLoad', 'imgLazyLoad'),
  getItem('重绘和回流', 'repaintAndReflow', 'repaintAndReflow'),
  getItem('减少请求数量', 'reduceRequests', 'reduceRequests'),
  getItem('减小资源大小', 'reduceResourceSize', 'reduceResourceSize'),
  getItem('优化网络连接', 'optimizeNetworkConnectivity', 'optimizeNetworkConnectivity'),
  getItem('优化资源加载', 'optimizeResourceLoading', 'optimizeResourceLoading'),
  getItem('渲染优化', 'renderOptimization', 'renderOptimization'),
  getItem('渲染完成后的优化', 'renderedOptimization', 'renderedOptimization'),
  getItem('requestAnimationFrame', 'requestAnimationFrame', 'requestAnimationFrame'),
  getItem('Webpack优化', 'webpackOptimize', 'webpackOptimize'),
  getItem('思考1', 'optimization1', 'optimization1'),
  getItem('思考2', 'optimization2', 'optimization2'),

];
