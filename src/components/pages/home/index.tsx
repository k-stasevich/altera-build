import React from 'react';
import Layout from '../../layout';

import Header from './header';
import Footer from '../footer';
import { BEM } from '../../../helpers/bem';

import './style.scss';

const classes = BEM('home-page');

interface IHomePageProps {}

export const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => {
  return (
    <Layout>
      <div className={classes()}>
        <div className={classes('main-section')}>
          <Header />
        </div>

        <div className={classes('footer')}>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};
