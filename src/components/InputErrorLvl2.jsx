import { FormikConsumer, useFormik } from 'formik';
import * as Yup from 'yup';

{
  /* level2 error <InputError formik={formik} field={'title'} /> */
}

function InputErrorLvl2(props) {
  if (props.field && props.formik) {
    return props.formik.errors[props.field];
  }
}
export default InputErrorLvl2;
