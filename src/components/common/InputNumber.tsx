import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { InputNumber } from "antd";

interface InputProps {
    value: number;
    unit: boolean;
    handleMinus: () => void;
    handlePlus: () => void;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

const BaseInputNumber: React.FC<InputProps> = ({
    value,
    unit,
    handleMinus = () => {},
    handlePlus = () => {},
    setValue,
}) => {
    const handleChange = (value: number) => {
        if (unit === true && value > 100) {
        setValue(100)
        } else setValue(value)
    }

    return (
        <div className="h-[36px] w-[140px] relative">
          <div
            onClick={() => handleMinus()}
            className="absolute z-10 h-9 w-9 top-0 left-0 bg-transparent hover:bg-[#3B3B3B] rounded-l-[8px] flex justify-center items-center text-[#AAAAAA] cursor-pointer"
            style={value === 0 ? { background: "#3B3B3B", cursor: "not-allowed"} : {}}
          >
            <MinusOutlined />
          </div>
          <div
            onClick={() => handlePlus()}
            className="absolute z-10 h-9 w-9 top-0 right-0 bg-transparent hover:bg-[#3B3B3B] rounded-r-[8px] flex justify-center items-center text-[#AAAAAA]"
            style={value === 100 && unit === true ? { background: "#3B3B3B", cursor: "not-allowed"} : {}}
          >
            <PlusOutlined />
          </div>
          <div className="bg-[#212121] rounded-[8px] hover:bg-[#3B3B3B] h-full">
            <InputNumber
              value={value}
              controls={false}
              formatter={(value) => `${value}`.replace(/[^0-9,.]/g, "")}
              parser={(value) => value?.replace(/,/g, ".") as unknown as number}
              onChange={(value: any) => handleChange(value)}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                color: "#AAAAAA",
                paddingLeft: 36,
                paddingRight: 36,
                fontSize: 12,
                display: "flex",
                alignItems: "center",
              }}
            />
          </div>
        </div>
    );
}
 
export default BaseInputNumber;