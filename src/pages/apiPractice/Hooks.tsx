
import { withAnchor } from '../../hoc/withAnchor';
import { lazy } from 'react';
import SpinLoading from '../../components/common/SpinLoading';
import { hooksAnchorItems } from './anchorConfig';

const CallbackInfo = lazy(() => import("./demos/Callback/CallbackInfo"));
const ContextInfo = lazy(() => import("./demos/Context/ContextInfo"));
const DebugValueInfo = lazy(() => import("./demos/DebugValue/DebugValueInfo"));
const DeferredValueInfo = lazy(() => import("./demos/DeferredValue/DeferredValueInfo"));
const EffectInfo = lazy(() => import("./demos/Effect/EffectInfo"));
const IdInfo = lazy(() => import("./demos/Id/IdInfo"));
const ImperativeHandleInfo = lazy(() => import("./demos/ImperativeHandle/ImperativeHandleInfo"));
const InsertionEffectInfo = lazy(() => import("./demos/InsertionEffect/InsertionEffectInfo"));

const EnhancedComponent = withAnchor(() => (
  <>
    <SpinLoading tip="Loading useCallback"><CallbackInfo /></SpinLoading>
    <SpinLoading tip="Loading useContext"><ContextInfo /></SpinLoading>
    <SpinLoading tip="Loading useDebugValue" ><DebugValueInfo /></SpinLoading>
    <SpinLoading tip="Loading useDeferredValue" ><DeferredValueInfo /></SpinLoading>
    <SpinLoading tip="Loading useEffect" ><EffectInfo /></SpinLoading>
    <SpinLoading tip="Loading useId" ><IdInfo /></SpinLoading>
    <SpinLoading tip="Loading useImperativeHandleInfo" ><ImperativeHandleInfo /></SpinLoading>
    <SpinLoading tip="Loading InsertionEffectInfo" ><InsertionEffectInfo /></SpinLoading>
  </>
))

export default function Hooks() {
  return <EnhancedComponent anchorItems={hooksAnchorItems} />;
}
