import React, { useCallback } from 'react';
import classNames from 'classnames';
import './index.scss';
import Header from './header';

const cls = classNames({
  'minn-home': true
});

const Home = () => {

  const onSearch = useCallback((e: any) => {
    console.log('value: ', e.target.value);

  }, [])

  return (<div className={cls} >
    <Header onSearch={onSearch} />
  </div>)
}

export default Home;