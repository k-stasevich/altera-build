import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { NavMenu } from '../../../nav-menu';

import './style.scss';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  const history = useHistory();

  return (
    <header id="header">
      {/* <div className="logo"></div> */}
      <div className="content">
        <div className="inner">
          <h1>АлтераСтрой</h1>
          <p>
            Cовременная динамично развивающаяся компания. Мы стремимся к лидерству на рынке
            профессионального и бытового климатического оборудования. Для этого мы постоянно
            улучшаем качество наших услуг, ведем гибкую ценовую политику и ценим всех своих
            клиентов. Основана в январе 2015г и уже за короткий срок успела завоевать уважение и
            доверие. Работаем как с физическими так и с юридическими лицами, нал./безнал. расчет.
          </p>
        </div>
      </div>

      <NavMenu
        items={[
          {
            title: 'Услуги',
            onClick: () => history.push('/services'),
          },
          {
            title: 'Контакты',
            onClick: () => history.push('/contact'),
          },
        ]}
      />
    </header>
  );
};

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
