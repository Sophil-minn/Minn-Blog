
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
const LayoutEffectInfo = lazy(() => import("./demos/LayoutEffect/LayoutEffectInfo"));
const MemoInfo = lazy(() => import("./demos/Memo/MemoInfo"));
const ReducerInfo = lazy(() => import("./demos/Reducer/ReducerInfo"));
const RefInfo = lazy(() => import("./demos/Ref/RefInfo"));
const StateInfo = lazy(() => import("./demos/State/StateInfo"));
const SyncExternalStoreInfo = lazy(() => import("./demos/SyncExternalStore/SyncExternalStoreInfo"));
const TransitionInfo = lazy(() => import("./demos/Transition/TransitionInfo"));

const EnhancedComponent = withAnchor(() => (
  <>
    <SpinLoading tip="Loading useCallback"><CallbackInfo /></SpinLoading>
    <SpinLoading tip="Loading useContext"><ContextInfo /></SpinLoading>
    <SpinLoading tip="Loading useDebugValue" ><DebugValueInfo /></SpinLoading>
    <SpinLoading tip="Loading useDeferredValue" ><DeferredValueInfo /></SpinLoading>
    <SpinLoading tip="Loading useEffect" ><EffectInfo /></SpinLoading>
    <SpinLoading tip="Loading useId" ><IdInfo /></SpinLoading>
    <SpinLoading tip="Loading useImperativeHandle" ><ImperativeHandleInfo /></SpinLoading>
    <SpinLoading tip="Loading useInsertionEffect" ><InsertionEffectInfo /></SpinLoading>
    <SpinLoading tip="Loading useLayoutEffect" ><LayoutEffectInfo /></SpinLoading>
    <SpinLoading tip="Loading useMemo" ><MemoInfo /></SpinLoading>
    <SpinLoading tip="Loading useReducer" ><ReducerInfo /></SpinLoading>
    <SpinLoading tip="Loading useRef" ><RefInfo /></SpinLoading>
    <SpinLoading tip="Loading useState" ><StateInfo /></SpinLoading>
    <SpinLoading tip="Loading useSyncExternalStore" ><SyncExternalStoreInfo /></SpinLoading>
    <SpinLoading tip="Loading useTransition" ><TransitionInfo /></SpinLoading>
  </>
))

export default function Hooks() {
  return <EnhancedComponent anchorItems={hooksAnchorItems} />;
}
