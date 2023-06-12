import classNames from 'classnames';
import './index.scss';
import { breadCrumbItems } from './config';
import Breadcrumb from '../components/Breadcrumb';
// import InfoContainer from '../components/InfoContainer';

const cls = classNames({
  'minn-reactTheory': true
});

const ReactTheory = () => {

  return (<div className={cls}>
    <Breadcrumb
      items={breadCrumbItems}
    />
    {/* <InfoContainer menu={[]} content={{}} /> */}
  </div >);
}

export default ReactTheory;