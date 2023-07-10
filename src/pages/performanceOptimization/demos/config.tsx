
import ImgLazyLoad from "./ImgLazyLoad";
import Optimization1 from "./Optimization1";
import Optimization2 from "./Optimization2";
import OptimizeNetworkConnectivity from "./OptimizeNetworkConnectivity";
import OptimizeResourceLoading from "./OptimizeResourceLoading";
import ReduceRequests from "./ReduceRequests";
import ReduceResourceSize from "./ReduceResourceSize";
import RenderOptimization from "./RenderOptimization";
import RenderedOptimization from "./RenderedOptimization";
import RepaintAndReflow from "./RepaintAndReflow";
import RequestAnimationFrame from "./RequestAnimationFrame";
import VirtualList from "./VirtualList";
import WebpackOptimize from "./WebpackOptimize";

export interface RouteParams {
  id: "optimization1" | "optimization2" | "imgLazyLoad" | "repaintAndReflow" | "renderOptimization" | "virtualList"
}


interface ComponentsMap {
  optimization1: React.ReactNode,
  optimization2: React.ReactNode,
  imgLazyLoad: React.ReactNode,
  repaintAndReflow: React.ReactNode,
  renderedOptimization: React.ReactNode,
  renderOptimization: React.ReactNode,
  virtualList: React.ReactNode,
  reduceResourceSize: React.ReactNode,
  reduceRequests: React.ReactNode,
  optimizeNetworkConnectivity: React.ReactNode,
  optimizeResourceLoading: React.ReactNode,
  requestAnimationFrame: React.ReactNode,
  webpackOptimize: React.ReactNode,
}


export const componentsMap: ComponentsMap = {
  optimization1: <Optimization1 />,
  optimization2: <Optimization2 />,
  imgLazyLoad: <ImgLazyLoad />,
  repaintAndReflow: <RepaintAndReflow />,
  renderedOptimization: <RenderedOptimization />,
  renderOptimization: <RenderOptimization />,
  virtualList: <VirtualList />,
  requestAnimationFrame: <RequestAnimationFrame />,
  reduceResourceSize: <ReduceResourceSize />,
  reduceRequests: <ReduceRequests />,
  optimizeNetworkConnectivity: <OptimizeNetworkConnectivity />,
  optimizeResourceLoading: <OptimizeResourceLoading />,
  webpackOptimize: <WebpackOptimize />,
};
