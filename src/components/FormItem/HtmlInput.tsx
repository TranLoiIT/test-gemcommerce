import { FieldInputProps, FormikProps } from "formik";
import { FC } from "react";
import TextEditor from "#/components/common/TextEditor";

export const HtmlInput: FC<{
  field: FieldInputProps<any>;
  props: any;
  form: FormikProps<any>;
  onChange?: any;
  onValueChange?: any;
}> = ({ field, form, onChange, onValueChange, ...props }) => {
  const handleValueChange = (value: any) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <TextEditor
      value={field.value}
      {...props}
      onSetContent={(value) => {
        handleValueChange(value);
      }}
    />
  );
};
