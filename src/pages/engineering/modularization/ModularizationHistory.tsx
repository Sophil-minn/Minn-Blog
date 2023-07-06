import { withAnchor } from '../../../hoc/withAnchor';
import { modularizationHistoryAnchorItems } from '../config';
import History from './History';
import './index.scss';

const EnhancedComponent = withAnchor(History)

export default function ModularizationHistory() {
  return <EnhancedComponent anchorItems={modularizationHistoryAnchorItems} />;
}

