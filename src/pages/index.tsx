// import { ConfigProvider, DatePicker } from "antd";

// Customize the names of weekdays
// locale = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const Home = () => {
  return (
    <div className="p-12 gap-12 grid h-[2400px]">
      <div className="mt-20"></div>

      <div>
        <span className="cursor-pointer" style={{ color: "red" }} onClick={add}>
          Add user to store
        </span>
      </div>
      <div>
        <span
          className="cursor-pointer"
          style={{ color: "red" }}
          onClick={update}
        >
          Update user to store
        </span>
      </div>
      <div>
        <span
          className="cursor-pointer"
          style={{ color: "red" }}
          onClick={remove}
        >
          Remove user to store
        </span>
      </div>
      <div>
        <span
          className="cursor-pointer"
          style={{ color: "red" }}
          onClick={() => router.push("/admin")}
        >
          admin page
        </span>
      </div>
    </div>
  );
};

export default Home;
