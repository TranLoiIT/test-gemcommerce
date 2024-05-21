import { MAX_LENGTH_INPUT } from "@/src/constants/common";
import {
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Space,
  Switch,
  TimePicker,
} from "antd";
import cx from "classnames";
import { ErrorMessage, Field, FieldInputProps, FormikProps } from "formik";
import { FC, memo } from "react";
import { FormItemType } from "./FormItemType";
import { HtmlInput } from "./HtmlInput";
import { NumberInput } from "./NumberInput";
import { SelectInput } from "./SelectInput";

const { Password, Search, TextArea } = Input;
const { RangePicker } = DatePicker;

export const TYPE_INPUT = {
  TEXT: "TEXT",
  PASSWORD: "PASSWORD",
  SELECT: "SELECT",
  CHECKBOX: "CHECKBOX",
  NUMBER: "NUMBER",
  SEARCH: "SEARCH",
  SWITCH: "SWITCH",
  OTHER: "OTHER",
  UPLOAD: "UPLOAD",
  COPY: "COPY",
  TEXTAREA: "TEXTAREA",
  RADIO: "RADIO",
  DATE_PICKER: "DATE_PICKER",
  TIME_PICKER: "TIME_PICKER",
  CARD_ITEM: "CARD_ITEM",
  RANGE_PICKER: "RANGE_PICKER",
  HTML_INPUT: "HTML_INPUT",
};

export const TextInput: FC<{
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  props: any;
  onBlur?: any;
}> = ({ field, form, onBlur, ...props }) => {
  const handleBlur = (event: any) => {
    field.onBlur(event);
    form.setFieldValue(field.name, field.value?.trim());
    if (onBlur) {
      onBlur(event);
    }
  };
  return (
    <Input
      maxLength={MAX_LENGTH_INPUT}
      {...field}
      {...props}
      onBlur={handleBlur}
    />
  );
};

export const TextareaComponent: FC<{
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  maxLength?: number;
  rows?: number;
  props: any;
  onBlur?: any;
}> = ({ field, form, maxLength, rows = 5, onBlur, ...props }) => {
  const maxLengthTextarea = maxLength || MAX_LENGTH_INPUT;

  const handleBlur = (event: any) => {
    field.onBlur(event);
    form.setFieldValue(field.name, field.value?.trim());
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div className="text-area">
      <TextArea
        rows={rows}
        maxLength={maxLengthTextarea}
        {...field}
        {...props}
        onBlur={handleBlur}
      />
    </div>
  );
};

export const SearchInput: FC<{
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  enterButton: any;
  props: any;
}> = ({ field, form, enterButton, ...props }) => {
  return (
    <Search
      enterButton={enterButton ? enterButton : "Search"}
      {...field}
      {...props}
    />
  );
};

export const RangePickerInput: FC<{
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  props: any;
  disabledDate?: any;
}> = ({ field, form, disabledDate, ...props }) => {
  const onChange = (val: any) => {
    form.setFieldValue(field.name, val);
  };
  return (
    <RangePicker
      disabledDate={disabledDate}
      // format={DATE_FORMAT_LIST}
      inputReadOnly={true}
      value={field.value}
      onChange={onChange}
      allowEmpty={[true, true]}
      {...props}
    />
  );
};

export const DatePickerInput: FC<{
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  props: any;
  disabledDate?: any;
}> = ({ field, form, disabledDate, ...props }) => {
  const onChange = (val: any) => {
    form.setFieldValue(field.name, val);
  };
  return (
    <DatePicker
      disabledDate={disabledDate}
      // format={DATE_FORMAT_LIST}
      // inputReadOnly={true}
      value={field.value}
      onChange={onChange}
      {...props}
    />
  );
};

export const TimePickerInput: FC<{
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  props: any;
  disabledDate?: any;
}> = ({ field, form, disabledDate, ...props }) => {
  const onChange = (val: any) => {
    form.setFieldValue(field.name, val);
  };
  return (
    <TimePicker
      disabledDate={disabledDate}
      // format={TIME_FORM_FORMAT}
      inputReadOnly={true}
      value={field.value}
      onChange={onChange}
      {...props}
    />
  );
};

export const PasswordInput: FC<{
  field: FieldInputProps<any>;
  props: any;
  showLevelPassword?: boolean;
  label?: any;
  labelClassName?: string;
  form: FormikProps<any>;
}> = ({ field, showLevelPassword, label, labelClassName, form, ...props }) => {
  return (
    <>
      <Password {...field} {...props} />
    </>
  );
};

export const CheckboxInput: FC<{
  field: FieldInputProps<any>;
  props: any;
  form: FormikProps<any>;
  content: any;
}> = ({ field, content, form, ...props }) => (
  <Checkbox {...field} {...props} checked={field.value}>
    {content}
  </Checkbox>
);

export const SwitchInput: FC<{
  field: FieldInputProps<any>;
  props: any;
  form: FormikProps<any>;
}> = ({ field, form, ...props }) => {
  const onChange = (checked: boolean) => {
    form.setFieldValue(field.name, checked);
  };
  return (
    <Switch {...field} {...props} checked={!!field.value} onChange={onChange} />
  );
};

export const RadioInput: FC<{
  field: FieldInputProps<any>;
  props: any;
  form: FormikProps<any>;
  options: {
    value: any;
    name: any;
  }[];
  defaultValue: any;
}> = ({ field, form, options, defaultValue, ...props }) => {
  return (
    <Radio.Group {...field} {...props} defaultValue={defaultValue}>
      <Space direction="vertical">
        {(options || []).map((item: any) => (
          <Radio key={item.value} value={item.value}>
            {item.name}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

const FormItem = ({
  component,
  placeholder,
  type,
  name,
  typeInput = TYPE_INPUT.TEXT,
  prefix,
  options,
  dropdownClassName,
  className,
  content,
  label,
  labelClassName,
  containerClassName,
  errorClassName,
  required,
  children,
  errorField,
  description,
  notShowErrorMsg,
  getPopupContainer,
  dropdownStyle,
  fileTypeErrorMessage,
  iconLink,
  ...props
}: FormItemType) => {
  let componentRender: any = component || TextInput;
  switch (typeInput) {
    case TYPE_INPUT.TEXT:
      componentRender = TextInput;
      break;
    case TYPE_INPUT.PASSWORD:
      componentRender = PasswordInput;
      break;
    case TYPE_INPUT.SELECT:
      componentRender = SelectInput;
      break;
    case TYPE_INPUT.CHECKBOX:
      componentRender = CheckboxInput;
      break;
    case TYPE_INPUT.NUMBER:
      componentRender = NumberInput;
      break;
    case TYPE_INPUT.SEARCH:
      componentRender = SearchInput;
      break;
    case TYPE_INPUT.SWITCH:
      componentRender = SwitchInput;
      break;
    case TYPE_INPUT.TEXTAREA:
      componentRender = TextareaComponent;
      break;
    case TYPE_INPUT.RADIO:
      componentRender = RadioInput;
      break;
    case TYPE_INPUT.DATE_PICKER:
      componentRender = DatePickerInput;
      break;
    case TYPE_INPUT.TIME_PICKER:
      componentRender = TimePickerInput;
      break;
    case TYPE_INPUT.RANGE_PICKER:
      componentRender = RangePickerInput;
      break;
    case TYPE_INPUT.HTML_INPUT:
      componentRender = HtmlInput;
      break;
  }
  const propsField: any = {
    prefix,
    placeholder,
    options,
    className,
    content,
    ...props,
  };
  if (typeInput === TYPE_INPUT.SELECT) {
    propsField.dropdownClassName = dropdownClassName;
    propsField.getPopupContainer = getPopupContainer;
    propsField.dropdownStyle = dropdownStyle;
  }
  if (typeInput === TYPE_INPUT.PASSWORD) {
    propsField.labelClassName = labelClassName;
  }

  const renderErrorMsg = (errMsg?: string) => {
    return (
      <div className="flex items-center mt-[6px]">
        <span className="pl-1 text-error text-left">{errMsg}</span>
      </div>
    );
  };

  return (
    <div className={cx(containerClassName, "form-item")}>
      <div className="flex">
        {label && (
          <div className={cx(labelClassName, "form-item__label")}>
            <div className="flex justify-start font-medium mb-[8px] text-[#1D1D1D]">
              {label}
              {required ? (
                <span className="text-colorError font-bold ml-[4px]">*</span>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
        {description && (
          <div className={cx(labelClassName, "form-item__description")}>
            {description}
          </div>
        )}
        {iconLink && (
          <div className="ml-[14px] mt-[5px] flex justify-start">
            {iconLink}
          </div>
        )}
      </div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
        component={componentRender}
        {...propsField}
      />
      {!notShowErrorMsg && (
        <ErrorMessage
          name={errorField || name}
          component="div"
          className={cx(errorClassName)}
          render={renderErrorMsg}
        />
      )}
      {children}
    </div>
  );
};

export default memo(FormItem);
