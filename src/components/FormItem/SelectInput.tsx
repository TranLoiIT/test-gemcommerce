import { Checkbox, Col, Row, Select } from "antd";
import { FieldConfig, FieldInputProps, FormikProps } from "formik";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

import { TYPE_INPUT } from ".";
import NoData from "../NoData";

const { Option } = Select;
const ALL_OPTIONS = "all-options";

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
  mode?: any;
  values?: any;
  optionsType?: any;
  enableAllOption?: any;
  hasAllOption: boolean;
  optionRender?: any;
  getPopupContainer?: any;
  externalOption?: any;
}> = ({
  field,
  form,
  options,
  prefix,
  className,
  onChange,
  optionsType,
  enableAllOption,
  hasAllOption,
  optionRender: optionRenderProps,
  getPopupContainer,
  externalOption,
  ...props
}) => {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const { value } = field;

  useEffect(() => {
    setIndeterminate(
      !!value && !!value.length && value.length < options.length
    );
    setCheckAll(!!value && !!value.length && value.length === options.length);
    setCurrentValue(value);
  }, [value]);

  const tagRender = (props: any) => {
    const { label, value } = props;
    const isLastValue = value === currentValue[currentValue?.length - 1];
    return isLastValue ? (
      <div className="search-form__select-item--multiple">{label} &nbsp;</div>
    ) : (
      <div className="search-form__select-item--multiple">{label}, &nbsp;</div>
    );
  };

  const onCheckAllOptions = (event: any) => {
    const { checked } = event.target as HTMLInputElement;
    let values = [];
    if (checked) {
      values = options.map((option) => option.value);
    } else {
      values = [];
    }
    setIndeterminate(false);
    setCheckAll(checked);
    onChangeSelect(values);
  };

  const optionsSelectAllRender = () => {
    switch (optionsType) {
      case TYPE_INPUT.CHECKBOX: {
        return (
          <div className="search-form__all-options">
            <Checkbox
              onChange={onCheckAllOptions}
              id={ALL_OPTIONS}
              indeterminate={indeterminate}
              checked={checkAll}
            >
              All
            </Checkbox>
          </div>
        );
      }
      default: {
        return null;
      }
    }
  };

  const optionsRender = (item: any) => {
    if (optionRenderProps) {
      return optionRenderProps(item);
    }
    switch (optionsType) {
      case TYPE_INPUT.CHECKBOX: {
        return (
          <Checkbox
            id={item.value}
            checked={value && value.indexOf(item.value) >= 0}
          >
            <div onClick={onPreventMouseDown}>{item.name}</div>
          </Checkbox>
        );
      }
      default: {
        return item.name;
      }
    }
  };

  const onPreventMouseDown = (event: any) => {
    event.stopPropagation();
  };

  const onChangeSelect = (val: any) => {
    setCurrentValue(val);
    if (onChange) {
      onChange({ form, field, val });
    } else {
      form.setFieldValue(field.name, val);
    }
  };

  const onDropdownVisibleChange = (open: boolean) => {
    if (!open) {
      form.setFieldTouched(field.name, true, false);
    }
  };

  return (
    <div className={className}>
      {prefix}
      <Select
        onDropdownVisibleChange={onDropdownVisibleChange}
        {...field}
        // suffixIcon={<img src={DownIcon} />}
        {...props}
        getPopupContainer={getPopupContainer}
        onChange={onChangeSelect}
        tagRender={tagRender}
        notFoundContent={<NoData text="No Data" />}
        dropdownRender={(menu: any) => {
          return (
            <>
              {enableAllOption &&
                options.length > 1 &&
                optionsSelectAllRender()}
              {menu}
            </>
          );
        }}
      >
        {hasAllOption ? (
          <Option value="" key="" label="">
            All
          </Option>
        ) : null}
        {options?.map((item) => (
          <Option value={item.value} key={item.value} label={item.name}>
            {optionsRender(item)}
          </Option>
        ))}
        {externalOption ? (
          <Option
            className="external-option"
            disabled
            value={externalOption.value}
            key={externalOption.value}
            label={externalOption.name}
          >
            <Link href={externalOption.url}>
              <a target="_blank" rel="noopener noreferrer">
                <Row gutter={16} wrap={false}>
                  <Col>
                    {externalOption.imgUrl ? (
                      <img
                        src={externalOption.imgUrl}
                        alt={`img-${externalOption.name}`}
                      />
                    ) : (
                      <PlusCircleOutlined />
                    )}
                  </Col>
                  <Col>{externalOption.value}</Col>
                </Row>
              </a>
            </Link>
          </Option>
        ) : null}
      </Select>
    </div>
  );
};

SelectInput.defaultProps = {
  options: [],
};
