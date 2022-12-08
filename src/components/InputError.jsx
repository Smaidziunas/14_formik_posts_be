import { FormikConsumer, useFormik } from 'formik';
import * as Yup from 'yup';

{
  /* level2 error <InputError formik={formik} field={'title'} /> */
}

function InputError(props) {
  if (props.error || props.touch)
    return <p className='inputErrorMsg'>{props.error}</p>;
}
export default InputError;
