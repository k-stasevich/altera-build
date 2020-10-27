import * as emailjs from 'emailjs-com';

const userId = 'user_Mn02sMbZVZAqjhZwvTvF9';

export const sendContactUsEmail = () => {
  const formEl = document.getElementById('contact-form');
  const formData = new FormData(formEl);
  const form = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  return new Promise((resolve, reject) => {
    const serviceId = 'alterastroy';
    const templateId = 'alterastroy';

    emailjs.send(serviceId, templateId, form, userId).then(
      response => {
        resolve(response);
      },
      err => {
        reject(err);
      }
    );
  });
};
