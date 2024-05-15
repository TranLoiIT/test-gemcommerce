import cx from "classnames";

interface NoDataProps {
  className?: any;
  type?: "large";
  text?: string;
}

const NoData: React.FC<NoDataProps> = ({ className, type }) => {
  return (
    <div
      className={`${cx("no-data", className, {
        "no-data--large": type === "large",
      })} flex items-center justify-center`}
    >
      {/* <Image alt="no data" src={Empty} /> */}
      No data
    </div>
  );
};

export default NoData;
