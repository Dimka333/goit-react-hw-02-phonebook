import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
//
// const schema = Yup.object().shape({
//   login: Yup.string().required(),
//   number: Yup.string()
//     .matches(phoneRegExp, 'Phone number is not valid')
//     .required(),
// })
export const ContactForm = ({ addContact }) => {

  const handleSubmit = ({ name, number }, actions) => {
    addContact(name, number);
    console.log(name, number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      // validationSchema={schema}
    >

      <Form className={styles.Form}>
        <label  className={styles.label}>Name
          <Field
            className={styles.input}
            name='name'
            type='text'
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />

        </label>

        <label className={styles.label}>
          Number
          <Field
            className={styles.input}
          type='text'
          name='number'
          // pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          // title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'

        />
          <ErrorMessage name="number" component="div" />
          <button type='submit'>Add contact</button>
        </label>

      </Form>
    </Formik>
  );
};

export default ContactForm;
