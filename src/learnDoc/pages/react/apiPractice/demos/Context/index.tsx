import { contextAnchorItems } from '../../anchorConfig';
import { withAnchor } from '../../../../../hoc/withAnchor';
import ContextInfo from './ContextInfo';

const EnhancedComponent = withAnchor(ContextInfo);

export default function Context() {
  return <EnhancedComponent anchorItems={contextAnchorItems} />;
}