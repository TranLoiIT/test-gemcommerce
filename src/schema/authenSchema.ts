// import { MESSAGE } from "@/utils/message";
import { object, string } from "yup";
import { MESSAGE } from "../utils/message";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const passwordValidation = (email: string, password: string) => {
  if (email) {
    for (let i = 0; i < email.length - 2; i++) {
      if (password.includes(email.substring(i, i + 3))) {
        return false;
      }
    }
    return true;
  }
};

export const getLoginSchema = () => {
  return object({
    accountName: string()
      .trim()
      .required(MESSAGE.VALIDATE.MSG_001("account name.")),
    password: string().required("Please enter password."),
  });
};

export const getVerifyPasswordSchema = (currentEmail: string) => {
  return object({
    token: string()
      .required("Please enter current password.")
      .min(8, MESSAGE.VALIDATE.MSG_002("Password"))
      .matches(passReg, MESSAGE.VALIDATE.MSG_002("Password")),
    newPassword: string()
      .required("Please enter new password.")
      .min(8, MESSAGE.VALIDATE.MSG_002("Password"))
      .matches(passReg, MESSAGE.VALIDATE.MSG_002("Password"))
      .test({
        name: "newPassword",
        exclusive: false,
        params: {},
        message:
          "- At least 8 characters \n - Must include uppercase and lowercase letters, and numbers \n - Do not contain three or more consecutive characters that are a part of your email",
        test: function (value: any) {
          const reg = passwordValidation(currentEmail, value);
          console.log(reg);
          return reg;
        },
      })
      .test({
        name: "newPassword",
        exclusive: false,
        params: {},
        message: MESSAGE.VALIDATE.MSG_018,
        test: function (v) {
          const currentPass = this.parent.token;
          return v !== currentPass;
        },
      }),

    confirmNewPassword: string().test({
      name: "confirmNewPassword",
      exclusive: false,
      message: MESSAGE.VALIDATE.MSG_008("New password", "confirm new password"),
      test: function (v) {
        const newPassword = this.parent.newPassword;
        return v === newPassword;
      },
    }),
  });
};

export const getForgotPasswordScheme = () => {
  return object({
    email: string()
      .trim()
      .required(MESSAGE.VALIDATE.MSG_001("email"))
      .email(MESSAGE.VALIDATE.MSG_002("Email")),
  });
};

export const myProfileChangePasswordSchema = (email: string) => {
  return object({
    email: string()
      .trim()
      .required(MESSAGE.VALIDATE.MSG_001("email."))
      .email()
      .test({
        name: "currentEmail",
        exclusive: false,
        message: MESSAGE.VALIDATE.MSG_099,
        test: function (v) {
          const currentEmail = this.parent.email;
          return v === currentEmail;
        },
      }),

    oldPassword: string()
      .required(MESSAGE.VALIDATE.MSG_001("current password."))
      .min(8, MESSAGE.VALIDATE.MSG_002("Password"))
      .matches(passReg, MESSAGE.VALIDATE.MSG_002("Password")),

    newPassword: string()
      .required(MESSAGE.VALIDATE.MSG_001("new password."))
      .min(8, MESSAGE.VALIDATE.MSG_002("Password"))
      .matches(passReg, MESSAGE.VALIDATE.MSG_002("Password"))
      .test({
        name: "newPassword",
        exclusive: false,
        params: {},
        message:
          "At least 8 characters \n Must include uppercase and lowercase letters, and numbers \n Do not contain three or more consecutive characters that are a part of your email",
        test: function (value: any) {
          const reg = passwordValidation(email, value);
          console.log(reg);
          return reg;
        },
      })
      .test({
        name: "newPassword",
        exclusive: false,
        params: {},
        message: MESSAGE.VALIDATE.MSG_018,
        test: function (v) {
          const currentPass = this.parent.oldPassword;
          return v !== currentPass;
        },
      }),

    confirmPassword: string()
      .required(MESSAGE.VALIDATE.MSG_001("confirm new password."))
      .test({
        name: "confirmNewPassword",
        exclusive: false,
        message: MESSAGE.VALIDATE.MSG_008(
          "New password",
          "confirm new password"
        ),
        test: function (v) {
          const newPassword = this.parent.newPassword;
          return v === newPassword;
        },
      }),
  });
};
