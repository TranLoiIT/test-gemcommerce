import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const BaseForm = () => {
  const SignupSchema = Yup.object().shape({
    accountName: Yup.string().trim().required("ádasdasd"),
  });
  const formik = useFormik({
    initialValues: {},
    validationSchema: SignupSchema,
    isInitialValid: false,
    onSubmit: async (values: any) => {
      await onSubmit(values);
    },
    enableReinitialize: true,
  });
  const onSubmit = async (formikHelpers: any) => {
    console.log("formikHelpers", formikHelpers);
  };
  const { values } = formik;

  return <FormikProvider value={formik}></FormikProvider>;
};

export default BaseForm;
