import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { CloseIcon } from '../../common/close-icon';
import { NavMenu } from '../../nav-menu';

import './style.scss';
import Layout from '../../layout';

export const ServicesPage: React.FC = (props) => {
  const history = useHistory();

  const onClose = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Layout>
      <div className="card">
        <article id="services">
          <h2 className="major">Услуги</h2>

          <NavMenu
            items={[
              {
                title: 'Сантехнические работы',
              },
              {
                title: 'Канализация',
                className: 'secondary',
              },
              {
                title: 'Отопление',
                className: 'secondary',
              },
              {
                title: 'Водопровод',
                className: 'secondary',
              },
              {
                title: 'Подключение стиральных и посудомоечных машин',
                className: 'secondary',
              },
              {
                title: 'Ремонт и установка гидрофоров (насосных станций для воды)',
                className: 'secondary',
              },
              {
                title: 'Кондиционеры',
              },
              {
                title: 'Алмазное сверление отверстий',
              },
            ]}
          />

          <CloseIcon.Wrapper>
            <CloseIcon.Icon onClick={onClose} />
          </CloseIcon.Wrapper>
        </article>
      </div>
    </Layout>
  );
};
