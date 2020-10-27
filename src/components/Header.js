import React from 'react';
import PropTypes from 'prop-types';
import { NavMenu } from './NavMenu';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>АлтераСтрой</h1>
        <p>
          Cовременная динамично развивающаяся компания. Мы стремимся к лидерству
          на рынке профессионального и бытового климатического оборудования. Для
          этого мы постоянно улучшаем качество наших услуг, ведем гибкую ценовую
          политику и ценим всех своих клиентов. Основана в январе 2015г и уже за
          короткий срок успела завоевать уважение и доверие. Работаем как с
          физическими так и с юридическими лицами, нал./безнал. расчет.
        </p>
      </div>
    </div>

    <NavMenu
      items={[
        {
          title: 'Услуги',
          onClick: () => props.onOpenArticle('services'),
        },
        // {
        //   title: 'О нас',
        //   onClick: () => props.onOpenArticle('about'),
        // },
        {
          title: 'Контакты',
          onClick: () => props.onOpenArticle('contact'),
        },
      ]}
    />
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
