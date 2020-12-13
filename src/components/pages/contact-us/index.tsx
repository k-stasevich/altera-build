import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '../../common/close-icon';
import { sendContactUsEmail } from '../../../helpers/contactFormHelper';
import { Button } from '../../common/Button';
import { BTN_TYPES } from '../../../constants/constants';
import Layout from '../../layout';
// import { BEM } from '../../../helpers/bem';

import './style.scss';
import { useHistory } from 'react-router-dom';

// const classes = BEM('contact-page');

interface IContactUsPageProps {}

export const ContactUsPage: React.FC<IContactUsPageProps> = (props) => {
  const history = useHistory();

  const [disableButton, setDisableButton] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const onClose = useCallback(() => {
    history.push('/');
  }, [history]);

  const resetForm = useCallback(() => {
    const formEl = document.getElementById('contact-form') as HTMLFormElement | null;
    if (formEl) {
      formEl.reset();
    }
  }, []);

  const onSubmit = useCallback(() => {
    setResponseMessage('');
    setDisableButton(true);

    sendContactUsEmail()
      .then((response) => {
        setDisableButton(false);
        setResponseMessage('Сообщение успешно отправлено.');
        resetForm();
      })
      .catch((err) => {
        setDisableButton(false);
        setResponseMessage('Произошла ошибка отправки, попробуйте позже.');
        resetForm();
      });
  }, [resetForm]);

  return (
    <Layout middle>
      <div className="card">
        <article id="contact">
          <h2 className="major">Контакты</h2>
          <form id="contact-form">
            <div className="field half first">
              <label htmlFor="name">Имя</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="phone">Номер телефона</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="field">
              <label htmlFor="message">Комментарий</label>
              <textarea name="message" id="message" rows={4} />
            </div>
            <ul className="actions">
              <li>
                <Button
                  type="button"
                  onClick={onSubmit}
                  theme={BTN_TYPES.SPECIAL}
                  disabled={disableButton}
                >
                  Отправить
                </Button>
              </li>
              <li>
                <input type="reset" value="Сбросить" />
              </li>
            </ul>

            <p style={{ fontSize: 20, margin: '10px 0' }}>{responseMessage}</p>
          </form>
          <ul className="icons">
            {/* <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="labclasses
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li> */}
          </ul>

          <ul>
            <li>mail: alteractroy@mail.ru</li>
            <li>адрес: Г. Пинск, ул. 60летОктября, д. 15, к. 1</li>
            <li>телефон: 8-044-534-03-39 (Velcom)</li>
            <li>телефон: 8-029-312-52-46</li>
          </ul>

          <CloseIcon.Wrapper>
            <CloseIcon.Icon onClick={onClose} />
          </CloseIcon.Wrapper>
        </article>
      </div>
    </Layout>
  );
};

ContactUsPage.propTypes = {
  articleClasses: PropTypes.string,
};

ContactUsPage.defaultProps = {};
