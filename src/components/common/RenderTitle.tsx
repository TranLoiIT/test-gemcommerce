import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface RenderTitleProps {
  title: string | ReactNode;
  renderBtn?: ReactNode;
  isBtnBack?: boolean;
}

const RenderTitle: React.FC<RenderTitleProps> = ({
  title,
  renderBtn,
  isBtnBack,
}) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 font-bold text-[24px]">
        {isBtnBack && (
          <div onClick={() => router.back()} className=" cursor-pointer">
            <ArrowLeftOutlined />
          </div>
        )}
        <div>{title}</div>
      </div>
      <div>{renderBtn}</div>
    </div>
  );
};

export default RenderTitle;
