import { useState } from "react";
import BaseInputNumber from "../components/common/InputNumber";

const InlineButtonInput = () => {
  const [unit, setUnit] = useState<boolean>(true)
  const [value, setValue] = useState<number>(1);

  const handleMinus = (value: number) => {
    const result = Math.round((value - 1) * 10) / 10;
    if (result < 0) {
      setValue(0)
    } else setValue(result)
  }

  const handlePlus = (value: number, unit: boolean) => {
    const result = Math.round((value + 1) * 10) / 10;
    if (unit === true && result > 100) {
      setValue(100)
    } else setValue(result)
  }

  return (
    <div className="bg-[#151515] h-screen px-20 py-10 flex flex-col gap-4">
      <div className="flex justify-between items-center w-[248px]">
        <div className="text-[#AAAAAA] text-[12px]">Unit</div>
        <div className="h-[36px] w-[140px] bg-[#212121] rounded-[8px] grid grid-cols-2 p-[2px] text-[12px] text-[#AAAAAA]">
          <div
            onClick={() => {
              setUnit(true)
              if (value > 100) {
                setValue(100);
              }
            }}
            className={`${unit === true ? "bg-[#424242]": "bg-transparent"} w-full h-[31px] flex justify-center items-center cursor-pointer rounded-[8px]`}
          >%</div>
          <div
            onClick={() => setUnit(false)}
            className={`${unit !== true ? "bg-[#424242]": "bg-transparent"} w-full h-[31px] flex justify-center items-center cursor-pointer rounded-[8px]`}
          >px</div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[248px]">
        <div className="text-[#AAAAAA] text-[12px]">Value</div>
        <BaseInputNumber
          value={value}
          unit={unit}
          handleMinus={() => handleMinus(value)}
          handlePlus={() => handlePlus(value, unit)}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default InlineButtonInput;
