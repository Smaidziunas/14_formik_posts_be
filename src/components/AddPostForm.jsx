import { FormikConsumer, useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from './InputError';
import InputErrorLvl2 from './InputErrorLvl2';

function AddPostForm(props) {
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      reaction: 0,
      userId: 1,
    },
    validationSchema: Yup.object().shape({
      image: Yup.string()
        .trim()
        .min(5, 'ne maziau nei 5 simbolai')
        .max(120)
        .required('privalomas laukas'),
      title: Yup.string().min(4).max(20).required('privalomas laukas'),
      body: Yup.string()
        .min(10, 'ne maziau nei 10 simboliu')
        .required('privalomas laukas'), // Yup.string mim(10).required(),
      reaction: Yup.number()
        .integer()
        .positive()
        .max(15)
        .required('privalomas laukas'), // skaicius, teigiamas, sveikasis, max15)
      userId: Yup.number().min(1).max(5), // number() teigiamas, nuo vieno iki 5 required.
    }),
    onSubmit: (values) => {
      // console.log('values ===', values);
    },
  });

  //
  /*
  reikalingi input
  "image" text
  "title" text
  "body" textarea
  "reactions" number 0
  */
  /*
   // console.log('formik.values ===', formik.values);
  // sudeti likusiems inputams klaidu atvaizdavima
  // extra prideti inputui klase errorField jei jame yra klaida
  // console.log('formik.errors ===', formik.errors);
  // console.log('  formik.touched ===', formik.touched);
 */

  return (
    <div>
      <h2>Create post</h2>
      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          //
          className={
            formik.touched.image && formik.errors.image ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type='text'
          placeholder='Image'
          name='image'
        />
        {/* level2 error <InputError formik={formik} field={'title'} /> */}
        {/* <InputError error={formik.errors.image} touch={formik.touched.image} /> */}
        <InputErrorLvl2 formik={formik} field={'image'} />
        <input
          className={
            formik.touched.title && formik.errors.title ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          type='text'
          placeholder='title'
          name='title'
        />
        <InputError error={formik.errors.title} touch={formik.touched.title} />
        <textarea
          className={
            formik.touched.body && formik.errors.body ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name='body'
          placeholder='Your text'
        />
        <InputError error={formik.errors.body} touch={formik.touched.body} />
        <input
          className={
            formik.touched.reaction && formik.errors.reaction
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reaction}
          type='number'
          placeholder='reactions'
          name='reaction'
        />
        <InputError
          error={formik.errors.reaction}
          touch={formik.touched.reaction}
        />
        <input
          className={
            formik.touched.userId && formik.errors.userId
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
          type='number'
          placeholder='0'
          name='userId'
          disabled
        />
        <InputError
          error={formik.errors.userId}
          touch={formik.touched.userId}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
