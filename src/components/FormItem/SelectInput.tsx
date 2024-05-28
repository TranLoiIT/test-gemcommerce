import { Select } from "antd";
import { FieldConfig, FieldInputProps, FormikProps } from "formik";
import { FC } from "react";

const { Option } = Select;

export const SelectInput: FC<{
  field: FieldInputProps<any>;
  props: FieldConfig;
  form: FormikProps<any>;
  options: {
    value: any;
    name: any;
  }[];
  prefix?: any;
  className?: string;
  onChange?: any;
}> = ({ field, form, options, className, onChange, ...props }) => {
  const onChangeSelect = (values: any) => {
    form.setFieldValue(field.name, values);
  };
  return (
    <Select className="w-full" {...field} {...props} onChange={onChangeSelect}>
      {(options || []).map((item) => {
        return (
          <Select.Option key={item.value} value={item.value}>
            {item.name || item.value}
          </Select.Option>
        );
      })}
    </Select>
  );
};
