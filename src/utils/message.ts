export const MESSAGE = {
  VALIDATE: {
    MSG_001: (field: string) => `Please enter ${field}`,
    MSG_001_1: (field: string) => `Please choose ${field}`,
    MSG_002: (field: string) =>
      `${field} is incorrect format. Please try again!`,
    MSG_002_1:
      "Cannot enter confirmation code after 5 times. Your account is locked. Please try again after 24 hours or contact administrator to unlock.",
    MSG_003: (field: string) => `${field} is incorrect. Please try again.`,
    MSG_003_1:
      "Mobile phone format must be one of these followings: 090-XXXX-YYYY, 080-XXXX-YYYY, 070-XXXX-YYYY, 050-XXXX-YYYY. Please try again.",
    MSG_003_2:
      "This phone number does not belong to account. Please try again.",
    MSG_005: "",
    MSG_008: (fieldName1: string, fieldName2: string) =>
      `${fieldName1} and ${fieldName2} do not match. Please try again.`,
    MSG_011: "Login successfully!",
    MSG_014: (field: string) => `${field} does not exist.`,
    MSG_013: "Logout successfully!",
    MSG_016: "The password has been reset.",
    MSG_018:
      "New Password and Current Password are the same. Please try again.",
    MSG_020: "Password has been changed successfully!",
    MSG_036: "Max upload file size is 5MB.",
    MSG_041: "Data has been saved successfully.",
    MSG_045: "Invalid account name or password.",
    MSG_081: (filed: string | number, min: string | number) =>
      `${filed} must be at least ${min} characters long.`,
    MSG_083: " This file is exceeding the maximum file size of 5MB.",
    MSG_084: "This file has invalid extension. Only png, jpeg are allowed.",
    MSG_085: "This file has invalid extension. Only CSV is allowed.",
    MSG_086: "Upload image successfully!",
    MSG_089: "Only 4 files accepted.",
    MSG_088: "Delete successfully!",
    MSG_092: "Import successfully!",
    MSG_099:
      "The email address you entered does not match your account. Please try again!",
    MSG_101: "Please upload import file.",
    MSG_102: "This file has incorrect template. Please try again.",
  },
  COUNT_CHARACTERS: (count: number | string) => `${count} characters remaining`,
  MAX_SIZE_UPLOAD_IMAGE: (count: number | string) =>
    `The maximum number of images is ${count} images. Please try again.`,
};
