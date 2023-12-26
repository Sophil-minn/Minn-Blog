
import { withAnchor } from '../../hoc/withAnchor';
import NodejsInfo from './NodejsInfo';
import { nodejsAnchorItems } from './config';
import './index.scss';


export default function index() {
  const EnhancedComponent = withAnchor(NodejsInfo)
  return <EnhancedComponent anchorItems={nodejsAnchorItems} />;
}


