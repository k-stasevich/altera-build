import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../common/CloseIcon';
import { sendContactUsEmail } from '../../helpers/contactFormHelper';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButton: false,
      responseMessage: '',
    };
  }

  resetForm = () => {
    const formEl = document.getElementById('contact-form');
    formEl.reset();
  };

  onSubmit = () => {
    this.setState({ disableButton: true, responseMessage: '' });

    sendContactUsEmail()
      .then(response => {
        this.setState({
          disableButton: false,
          responseMessage: 'Сообщение успешно отправлено.',
        });
        this.resetForm();
      })
      .catch(err => {
        this.setState({
          disableButton: false,
          responseMessage: 'Произошла ошибка отправки, попробуйте позже.',
        });
        this.resetForm();
      });
  };

  render() {
    const { onClose, articleClasses } = this.props;
    const { disableButton, responseMessage } = this.state;

    return (
      <article
        id="contact"
        className={articleClasses}
        style={{ display: 'none' }}
      >
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
            <textarea name="message" id="message" rows="4" />
          </div>
          <ul className="actions">
            <li>
              <button
                type="button"
                onClick={this.onSubmit}
                className="special"
                disabled={disableButton}
              >
                Отправить
              </button>
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
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
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

        <CloseIcon onClick={onClose} />
      </article>
    );
  }
}

ContactUs.propTypes = {
  onClose: PropTypes.func.isRequired,
  articleClasses: PropTypes.string,
};

ContactUs.defaultProps = {};

export default ContactUs;
