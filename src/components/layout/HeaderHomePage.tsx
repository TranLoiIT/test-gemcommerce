import {
  CloseOutlined,
  FacebookFilled,
  MenuOutlined,
  PhoneFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Collapse, Drawer, Input, Tooltip } from "antd";
import { useEffect, useState } from "react";
import RenderTooltip from "./RenderTootip";

const DataExample = new Array(5).fill(null).map(() => ({
  label: "Trang Điểm",
  key: "trang-diem",
  children: [
    {
      label: "Mắt/EYES",
      key: "trang-diem",
      children: [
        { label: "Phấn mắt", key: "phan-mat" },
        { label: "Bút kẻ mắt", key: "but-ke-mat" },
      ],
    },
    {
      label: "Mặt/FACE",
      key: "trang-diem",
      children: [
        { label: "Kem nền", key: "phan-mat" },
        { label: "BB-Cream & CC-Cream", key: "but-ke-mat" },
        { label: "Phấn phủ", key: "but-ke-mat" },
      ],
    },
    {
      label: "Môi/LIPS",
      key: "trang-diem",
      children: [
        { label: "Son thỏi", key: "phan-mat" },
        { label: "Son nước", key: "but-ke-mat" },
      ],
    },
    {
      label: "Phụ kiện",
      key: "trang-diem",
      children: [
        { label: "Tẩy trang", key: "phan-mat" },
        { label: "Bọt biển makeup", key: "but-ke-mat" },
      ],
    },
  ],
}));

const HeadHomePage = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const header = document.querySelector(".page-header");
    const toggleClass = "is-sticky";
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      console.log("currentScroll :>> ", currentScroll);
      if (currentScroll > 100) {
        header && header.classList.add(toggleClass);
      } else {
        header && header.classList.remove(toggleClass);
      }
    });
  }, []);

  return (
    <>
      <header className="page-header">
        <div className="bg-primary-hearder header-top flex justify-center py-[3px]">
          <div className="container flex justify-between items-center">
            <div className="text-xs md:text-left text-center font-medium w-full">
              Hàng Xách Tay Chính Hãng - Cam Kết Chất Lượng Sản Phẩm
            </div>
            <div className="gap-1 md:flex hidden">
              <Tooltip title="Theo dõi trên facebook">
                <FacebookFilled
                  className="cursor-pointer"
                  style={{ fontSize: 20 }}
                />
              </Tooltip>
              <Tooltip title="Gửi gmail cho chúng tôi">
                <FacebookFilled
                  className="cursor-pointer"
                  style={{ fontSize: 20 }}
                />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:pt-5 pt-2 py-2">
          <div className="container">
            <nav>
              <div className="md:hidden flex items-center">
                <div
                  onClick={() => setVisible(true)}
                  className="flex justify-center items-center md:hidden bg-[#002878] w-10 p-2 rounded-md grid-cols-2 h-10"
                >
                  <MenuOutlined style={{ fontSize: 20, color: "white" }} />
                </div>
              </div>
              {/* logo web */}
              <div className="md:col-auto col-span-3 flex justify-center items-center">
                <div className="cursor-pointer w-[120px] h-[70px] bg-slate-500">
                  <img src="" height={70} alt="logo" />
                </div>
              </div>
              {/* search item */}
              <div className="search-field md:block hidden">
                <div className="relative">
                  <Input name="keyword" placeholder={"Quý khách cần gì ạ..."} />
                  <div className="icon-search">
                    <SearchOutlined
                      style={{ fontWeight: 900, color: "#5f5f5f" }}
                    />
                  </div>
                </div>
              </div>
              {/* phone, inf */}
              <div className="justify-start items-center w-[120px] md:flex hidden">
                <PhoneFilled style={{ fontSize: 18, color: "#5f5f5f" }} />
                <div className="ml-[4px]">0123456789</div>
              </div>
            </nav>
            <div className="md:block hidden">
              <RenderTooltip data={DataExample} />
            </div>
            <div className="block md:hidden search-field w-full">
              <div className="relative mt-3">
                <Input name="keyword" placeholder={"Quý khách cần gì ạ..."} />
                <div className="icon-search">
                  <SearchOutlined
                    style={{ fontWeight: 900, color: "#5f5f5f" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-mob">
          <Drawer
            bodyStyle={{ padding: 12 }}
            title={false}
            placement={"left"}
            closable={false}
            visible={visible}
            width={"95%"}
          >
            <div className="flex justify-end items-center w-full">
              <CloseOutlined
                onClick={() => setVisible(false)}
                style={{ fontSize: 20 }}
              />
            </div>
            <div>
              <Collapse ghost>
                {DataExample.map((item, _index) => (
                  <Collapse.Panel key={item.key} header={item.label}>
                    <div className="ml-5 grid gap-y-5">
                      {(item?.children || []).map((item1, idx) => (
                        <div key={`tooltip_c1_${idx + 1}`}>
                          <div className="font-medium text-[#000000] mb-2">
                            {item1.label}
                          </div>
                          {(item1?.children || []).map((item2, idx) => (
                            <div
                              key={`tooltip_c2_${idx + 1}`}
                              className="text-gray-500 hover:bg-slate-200 py-1 px-[2px] cursor-pointer"
                            >
                              {item2.label}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Collapse.Panel>
                ))}
              </Collapse>
              {/* <Collapse defaultActiveKey={["1"]} ghost items={DataExample} /> */}
            </div>
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default HeadHomePage;
