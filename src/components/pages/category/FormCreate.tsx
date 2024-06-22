import FormItem, { TYPE_INPUT } from "../../FormItem";

interface FormCategoryProps {}

const FormCategory: React.FC<FormCategoryProps> = () => {
  return (
    <>
      <FormItem
        name={"name"}
        typeInput={TYPE_INPUT.TEXT}
        label="Tên thể loại"
        required
        maxLength={124}
      />
      <FormItem
        name={"description"}
        typeInput={TYPE_INPUT.TEXT}
        label="Mô tả"
        required
        maxLength={256}
      />
    </>
  );
};

export default FormCategory;
