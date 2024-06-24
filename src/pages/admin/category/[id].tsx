import DrawerCompoment from "@/src/components/common/Drawer";
import ModalConfirm from "@/src/components/common/ModalConfirm";
import RenderTitle from "@/src/components/common/RenderTitle";
import FormCategory from "@/src/components/pages/category/FormCreate";
import { TYPE_ACTION } from "@/src/constants/common";
import {
  DeleteOutlined,
  FormOutlined,
  PlusOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Button, Table } from "antd";
import { Form, FormikProvider, useFormik } from "formik";
import { get, isEqual } from "lodash";
import { useState } from "react";
import * as Yup from "yup";

const RenderFiled: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex justify-start items-center text-base gap-4">
      <div className="font-semibold">{`${label}: `}</div>
      <div>{value}</div>
    </div>
  );
};

const ViewCategory = () => {
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [openFormView, setOpenFormView] = useState(false);
  const [currentForm, setCurrentForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any>([
    {
      _id: "090288j2aaaa1",
      name: "test2",
      description: "mô tả 2",
      createAt: "2024/12/23",
    },
  ]);
  const [dataDetail, setDataDetail] = useState<any>({
    _id: "090288j2ggv1nh11g2",
    name: "test",
    description: "mô tả",
    createAt: "2024/12/23",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });

  const createCategory = (data: any) => {
    console.log("create :>> ");
    try {
      setLoading(true);
      setDataSource([data, ...dataSource]);
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      setOpenForm(false);
      setLoading(false);
      formik.resetForm();
    }
  };

  const editCategory = (data: any) => {
    console.log("edit :>> ");
    try {
      setLoading(true);
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      setOpenFormEdit(false);
      setLoading(false);
      formik.resetForm();
      setCurrentForm({});
    }
  };

  const deleteCategory = () => {
    try {
      console.log("delete :>> =====");
      console.log("data:>> =====", currentForm);
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      setCurrentForm({});
      setOpenModalConfirm(false);
    }
  };

  const handleActions = (data: any, type: string) => {
    if (TYPE_ACTION.EDIT) {
      setOpenFormEdit(true);
    } else {
      setOpenFormView(true);
    }
    formik.setValues(data);
    setCurrentForm(data);
  };

  // colums table
  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      key: "_id",
      width: 60,
      render: (_value: string, _item: any, index: number) =>
        (pagination.page - 1) * 10 + (index + 1),
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: 360,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createAt",
      key: "createAt",
      width: 200,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Chức năng",
      dataIndex: "_id",
      key: "_id",
      width: 200,
      render: (_value: string, record: any) => (
        <div className="flex justify-between items-center gap-2">
          <Button
            type="primary"
            onClick={() => handleActions(record, TYPE_ACTION.EDIT)}
          >
            <FormOutlined />
          </Button>

          <Button
            type="primary"
            onClick={() => handleActions(record, TYPE_ACTION.VIEW)}
          >
            <SnippetsOutlined />
          </Button>

          <Button
            type="primary"
            danger
            onClick={() => {
              setOpenModalConfirm(true);
              setCurrentForm(record);
            }}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  // form create
  const SignupSchema = Yup.object().shape({
    name: Yup.string().trim().required("Vui lòng nhập tên thể loại."),
    description: Yup.string().trim().required("Vui lòng nhập mô tả thể loại."),
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema: SignupSchema,
    isInitialValid: false,
    onSubmit: (values: any) => {
      if (openForm) {
        createCategory(values);
      } else {
        editCategory(values);
      }
    },
    enableReinitialize: true,
  });

  return (
    <div className="p-4">
      <div className="mt-[20px]">
        <RenderTitle title="Thông tin thể loại" isBtnBack />
        <div className="bg-white rounded-md p-4 my-8 grid grid-cols-2 gap-8">
          <RenderFiled
            label="Tên thể loại"
            value={get(dataDetail, "name", "")}
          />
          <RenderFiled
            label="Ngày tạo"
            value={get(dataDetail, "createAt", "")}
          />
          <RenderFiled
            label="Mô tả"
            value={get(dataDetail, "description", "")}
          />
        </div>
      </div>

      <div className="bg-white rounded-md p-4">
        <div className="mt-[20px]">
          <RenderTitle
            title="Danh sách tiểu thể loại"
            style={{ fontSize: 20 }}
            renderBtn={
              <Button type="primary" onClick={() => setOpenForm(true)}>
                <PlusOutlined style={{ color: "white" }} />
                <div>Thêm mới tiểu thể loại</div>
              </Button>
            }
          />
        </div>

        <div className="pt-[48px]">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>

      <DrawerCompoment
        open={openForm}
        setOpen={setOpenForm}
        title="Tạo mới tiểu thể loại"
        onOK={() => formik.handleSubmit()}
        disabledBtn={!formik.isValid}
      >
        <FormikProvider value={formik}>
          <Form>
            <FormCategory />
          </Form>
        </FormikProvider>
      </DrawerCompoment>

      <DrawerCompoment
        open={openFormEdit}
        setOpen={setOpenFormEdit}
        title="Cập nhập tiểu thể loại"
        onOK={() => formik.handleSubmit()}
        disabledBtn={isEqual(formik.values, currentForm)}
        labelBtn="Lưu"
      >
        <FormikProvider value={formik}>
          <Form>
            <FormCategory />
          </Form>
        </FormikProvider>
      </DrawerCompoment>

      <DrawerCompoment
        open={openFormView}
        setOpen={setOpenFormView}
        title="Thông tin tiểu thể loại"
        extra=""
      >
        <FormikProvider value={formik}>
          <Form>
            <FormCategory />
          </Form>
        </FormikProvider>
      </DrawerCompoment>

      <ModalConfirm
        open={openModalConfirm}
        setOpen={setOpenModalConfirm}
        title="Cảnh báo"
        children="Bạn có đồng ý xóa tiểu thể loại này không?"
        onOK={() => deleteCategory()}
      />
    </div>
  );
};

export default ViewCategory;
