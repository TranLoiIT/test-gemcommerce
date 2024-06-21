import { ROUTER_APP } from "@/src/constants/router";
import {
  ContainerOutlined,
  LogoutOutlined,
  PieChartOutlined,
  ProductOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import IconMenu from "../Icon/icon-menu";
type MenuItem = Required<MenuProps>["items"][number];

const menuTop: any = [
  {
    key: "1",
    icon: <PieChartOutlined style={{ fontSize: 20 }} />,
    label: "Thống kê",
    path: ROUTER_APP.DASBOARD.DEFAULT,
  },
  {
    key: "2",
    icon: <ProductOutlined style={{ fontSize: 20 }} />,
    label: "Quản lý sản phẩm",
    path: ROUTER_APP.PRODUCT.DEFAULT,
  },
  {
    key: "3",
    icon: <ContainerOutlined style={{ fontSize: 20 }} />,
    label: "Quản lý thể loại",
    path: ROUTER_APP.CATEGORY.DEFAULT,
  },
  {
    key: "sub1",
    label: "Quản lý người dùng",
    icon: <UsergroupAddOutlined style={{ fontSize: 20 }} />,
    path: ROUTER_APP.ACCOUNT.DEFAULT,
  },
];

const menuBottom: MenuItem[] = [
  {
    key: "1.1",
    icon: <LogoutOutlined style={{ fontSize: 20 }} />,
    label: "Đăng xuất",
  },
];

const itemsDropdown: MenuProps["items"] = [
  {
    key: "1.2",
    label: "Thông tin tài khoản",
  },
];

const LayoutAdmin: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  // check authen
  // const { user } = useAuth();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handelClick = (value: string) => {
    const itemsActive = menuTop.filter((item: any) => item.key === value);
    if (itemsActive[0]?.path) {
      router.push(itemsActive[0].path);
    }
  };

  const handelLogout = () => {
    console.log("logout :>>==================");
  };

  return (
    <div className="w-full h-screen relative bg-gray-100">
      {/* menu left */}
      <div
        className="bg-white absolute inset-y-0 left-0 shadow-sm"
        style={{ width: !collapsed ? 256 : 80 }}
      >
        <div
          className="px-[28px] py-[32px] h-[40px] flex items-center"
          onClick={toggleCollapsed}
        >
          <IconMenu />
          {!collapsed && (
            <div className="text-[32px] font-bold pl-6 text-center">Admin</div>
          )}
        </div>
        <div
          className="flex flex-col flex-1"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            inlineCollapsed={collapsed}
            items={menuTop}
            onClick={(value) => handelClick(value?.key)}
          />
          <Menu
            mode="inline"
            className="mt-auto"
            inlineCollapsed={collapsed}
            items={menuBottom}
            onClick={() => handelLogout()}
          />
        </div>
      </div>
      {/* header */}
      <div
        className="bg-white absolute top-0 right-0 h-[64px] shadow-sm"
        style={{ left: !collapsed ? 256 : 80 }}
      >
        <div className="flex justify-end items-center h-full px-[24px]">
          <Dropdown menu={{ items: itemsDropdown }} placement="bottomLeft">
            <div className="text-gray-500">
              <UserOutlined
                className="cursor-pointer border rounded-full p-2 border-gray-500 "
                style={{ fontSize: 20 }}
              />
              <span className="font-medium text-black ml-2">User name</span>
            </div>
          </Dropdown>
        </div>
      </div>
      {/* content */}
      <div
        className="absolute top-[64px] bottom-0 right-0 shadow-sm"
        style={{ left: !collapsed ? 256 : 80 }}
      >
        <div className="h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
