import type { DrawerProps } from "antd";
import { Button, Drawer } from "antd";
import React from "react";

interface DrawerCompomentProps {
  title?: string;
  placement?: DrawerProps["placement"];
  onOK?: () => void;
  width?: number;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  open: boolean;
  setOpen: any;
  labelBtn?: string;
  disabledBtn?: boolean;
}

const DrawerCompoment: React.FC<DrawerCompomentProps> = ({
  title = "",
  placement = "right",
  width = 500,
  open = false,
  disabledBtn = false,
  labelBtn = "Tạo mới",
  setOpen,
  children,
  extra,
  onOK,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      width={width}
      onClose={() => setOpen(false)}
      open={open}
      maskClosable={false}
      extra={
        extra ? (
          extra
        ) : (
          <Button
            disabled={disabledBtn}
            type="primary"
            htmlType="submit"
            onClick={onOK}
          >
            {labelBtn}
          </Button>
        )
      }
    >
      {children}
    </Drawer>
  );
};

export default DrawerCompoment;
