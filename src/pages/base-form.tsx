import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import FormItem, { TYPE_INPUT } from "../components/FormItem";

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
  console.log("values :>> ", values);

  return (
    <div className="mt-20">
      <FormikProvider value={formik}>
        <div className="grid grid-cols-2 gap-8">
          <FormItem name={"text"} typeInput={TYPE_INPUT.TEXT} label="text" />
          <FormItem
            name={"number"}
            typeInput={TYPE_INPUT.NUMBER}
            label="number"
          />
          <FormItem
            name={"password"}
            typeInput={TYPE_INPUT.PASSWORD}
            label="password"
          />
          <FormItem
            name={"select"}
            typeInput={TYPE_INPUT.SELECT}
            label="select"
            options={[
              { name: "a", value: "a" },
              { name: "b", value: "b" },
            ]}
            mode="multiple"
          />
          <FormItem
            name={"checkbox"}
            typeInput={TYPE_INPUT.CHECKBOX}
            label="checkbox"
          />
          <FormItem
            name={"search"}
            typeInput={TYPE_INPUT.SEARCH}
            label="search"
          />
          <FormItem
            name={"switch"}
            typeInput={TYPE_INPUT.SWITCH}
            label="switch"
          />
          <FormItem
            name={"textarea"}
            typeInput={TYPE_INPUT.TEXTAREA}
            label="textarea"
          />
          <FormItem
            name={"radio"}
            typeInput={TYPE_INPUT.RADIO}
            label="radio"
            options={[
              { name: "a", value: "a" },
              { name: "b", value: "b" },
            ]}
          />
          <FormItem
            name={"datePicker"}
            typeInput={TYPE_INPUT.DATE_PICKER}
            label="datePicker"
          />
          <FormItem
            name={"timePicker"}
            typeInput={TYPE_INPUT.TIME_PICKER}
            label="timePicker"
          />
          <FormItem
            name={"rangePicker"}
            typeInput={TYPE_INPUT.RANGE_PICKER}
            label="rangePicker"
          />
          <FormItem
            name={"htmlInput"}
            typeInput={TYPE_INPUT.HTML_INPUT}
            label="htmlInput"
          />
        </div>
      </FormikProvider>
    </div>
  );
};

export default BaseForm;
