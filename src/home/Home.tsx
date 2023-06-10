import React from 'react';
import classNames from 'classnames';
import './index.scss';
import Header from './header';

const cls = classNames({
    'minn-home': true
  });

const Home = () => {
  return (<div className={cls} >
    <Header />
  </div>)
}

export default Home ;