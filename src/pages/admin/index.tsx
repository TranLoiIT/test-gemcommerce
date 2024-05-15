import useAuth from "@/src/hook/useAuth";
import { deleteUser } from "@/src/store/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  // Layout Admin
  const dispatch = useDispatch();
  const router = useRouter();
  const { checkSuccess } = useAuth();
  if (!checkSuccess) {
    return null;
  }

  const logout = () => {
    router.push("/");
    setTimeout(() => {
      dispatch(deleteUser({}));
    }, 1000);
  };

  return (
    <div className="p-12 gap-12 grid">
      <div>Admin Page</div>
      <div>
        <span
          className="cursor-pointer"
          style={{ color: "red" }}
          onClick={logout}
        >
          logout
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
