import FormItem, { TYPE_INPUT } from "@/src/components/FormItem";
import { Button } from "antd";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().trim().email().required("Vui lòng nhập email!"),
    password: Yup.string().trim().required("Vui lòng nhập mật khẩu"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    isInitialValid: false,
    onSubmit: async (values: any) => {
      console.log("values", values);
    },
    enableReinitialize: true,
  });

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <div className="w-full flex justify-center items-center h-full">
        <div
          className="w-1/3 p-[16px] py-[32px] bg-white flex flex-col items-center"
          style={{
            boxShadow: "0px 6px 8px 0px rgba(0, 0, 0, 0.15)",
            borderRadius: 20,
          }}
        >
          <div
            // style={{ fontFamily: "Roboto !important" }}
            className="text-center"
          >
            <div className="text-2xl font-extrabold text-[#122246]">
              Chào mừng quay trở lại!
            </div>
            <p className="text-[#737786]">
              Vui lòng nhập thông tin đăng nhập của bạn dưới đây
            </p>
          </div>
          <div className="w-full mt-[1.5rem] px-[2rem]">
            <FormikProvider value={formik}>
              <Form>
                <FormItem
                  name={"email"}
                  typeInput={TYPE_INPUT.TEXT}
                  label="Email"
                />
                <FormItem
                  name={"password"}
                  typeInput={TYPE_INPUT.PASSWORD}
                  label="Password"
                />
                <div className="text-center mt-[1.5rem]">
                  <Button
                    disabled={!formik.isValid}
                    htmlType="submit"
                    className="text-white"
                  >
                    Đăng nhập
                  </Button>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
