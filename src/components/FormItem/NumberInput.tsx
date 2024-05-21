// import NumberFormat from "#/components/NumberFormat";
import { FieldInputProps, FormikProps } from "formik";

export const NumberInput: React.FC<{
  field: FieldInputProps<any>;
  props: any;
  form: FormikProps<any>;
  unit: string;
  thousandSeparator?: boolean;
  onChange?: any;
  onValueChange?: any;
}> = ({
  field,
  form,
  unit,
  thousandSeparator,
  onChange,
  onValueChange,
  ...props
}) => {
  const handleChange = (e: React.SyntheticEvent): void => {
    if (thousandSeparator) {
      return;
    } else {
      field.onChange(e);
    }
  };

  const handleValueChange = (values: any) => {
    if (thousandSeparator) {
      form.setFieldValue(field.name, values?.value);
    }
  };

  return (
    <>
      {/* <NumberFormat
        allowNegative={false}
        customInput={Input}
        thousandSeparator={thousandSeparator}
        onValueChange={onValueChange ?? handleValueChange}
        {...field}
        {...props}
        onChange={onChange ?? handleChange}
      /> */}
      {/* {unit && <span className="unit">{unit}</span>} */}
      {/* cannot */}
    </>
  );
};
