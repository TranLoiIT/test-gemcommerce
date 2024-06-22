import { Button, Modal } from "antd";

interface ModalConfirmProps {
  title?: string;
  onOK?: () => void;
  children?: React.ReactNode;
  open: boolean;
  setOpen: any;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  title = "",
  onOK = () => {},
  children,
  open,
  setOpen,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={() => setOpen(false)}
      footer={[
        <Button onClick={() => setOpen(false)}>Không</Button>,
        <Button type="primary" onClick={onOK}>
          Có
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default ModalConfirm;
