import { DownOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

interface IProps {
  title: string;
  id: string;
  data: Array<{
    title: string;
    id: string;
    data: Array<{
      title: string;
      id: string;
    }>;
  }>;
}

const RenderTooltip = ({ data }: { data: Array<IProps> }) => {
  const renderPlacement = (idx: number) => {
    if (idx === 0) {
      return "bottomRight";
    } else if (idx === data.length - 1) {
      return "bottomLeft";
    }
    return "bottom";
  };
  return (
    <div className="flex justify-between items-center gap-5 py-1 mt-5">
      {(data || []).map((item, index) => (
        <Tooltip
          key={`tooltip_${index + 1}`}
          title={
            <div className="flex justify-start items-start">
              {(item?.data || []).map((item1, idx) => (
                <div
                  key={`tooltip_c1_${idx + 1}`}
                  className={
                    item.data.length !== idx + 1
                      ? "border-r border-gray-300 min-h-[120px] px-5 py-[6px]"
                      : "min-h-[120px] px-5 py-[6px]"
                  }
                >
                  <div className="font-medium text-[#000000] mb-2">
                    {item1.title}
                  </div>
                  {(item1?.data || []).map((item2, idx) => (
                    <div
                      key={`tooltip_c2_${idx + 1}`}
                      className="text-gray-500 hover:bg-slate-200 py-1 px-[2px] cursor-pointer"
                    >
                      {item2.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          }
          placement={renderPlacement(index)}
          color="white"
        >
          <div className="font-bold text-gray-500 hover:text-black cursor-pointer">
            {item.title}
            <span className="ml-2">
              <DownOutlined />
            </span>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default RenderTooltip;
