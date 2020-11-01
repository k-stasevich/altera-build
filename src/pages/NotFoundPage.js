import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import Layout from '../components/layout';

export const NotFoundPage = () => (
  <Layout>
    <h1>404</h1>
    <p>Такой страницы не существует</p>
    <div>
      <Link to="/">
        <Button>На главную</Button>
      </Link>
    </div>
  </Layout>
);
