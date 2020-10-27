import React from 'react';
import PropTypes from 'prop-types';

import pic01 from '../../images/pic01.jpg';
import CloseIcon from '../common/CloseIcon';
import { NavMenu } from '../NavMenu';

const ServicesArticle = (props) => {
  const { onClose, articleClasses } = props;

  return (
    <article id="services" className={articleClasses} style={{ display: 'none' }}>
      <h2 className="major">Услуги</h2>
      <span className="image main">
        <img src={pic01} alt="" />
      </span>

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

      <CloseIcon onClick={onClose} />
    </article>
  );
};

ServicesArticle.propTypes = {
  onClose: PropTypes.func.isRequired,
  articleClasses: PropTypes.string,
};

ServicesArticle.defaultProps = {};

export default ServicesArticle;
