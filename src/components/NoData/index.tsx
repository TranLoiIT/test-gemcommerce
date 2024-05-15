import { FC } from "react";
import cx from "classnames";
import { Empty } from "public/images";
import Image from "next/image";

interface NoDataProps {
  className?: any;
  type?: "large";
  text?: string;
}

const NoData: FC<NoDataProps> = ({ className, type }) => {
  return (
    <div
      className={`${cx("no-data", className, {
        "no-data--large": type === "large",
      })} flex items-center justify-center`}
    >
      <Image alt="no data" src={Empty} />
    </div>
  );
};

export default NoData;
