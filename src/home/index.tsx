
import classNames from 'classnames';
import InfoContainer from './InfoContainer';

const cls = classNames({
  'minn-home': true
});

const Home = () => {
  return (<div className={cls} >
    <InfoContainer menu={[]} content={{}} />
  </div>)
}

export default Home;