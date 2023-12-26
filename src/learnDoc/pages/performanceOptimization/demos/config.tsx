
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




export const componentsMap: { [key in performanceOptimization.RouteIdEnum]?: React.ReactNode } = {
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
