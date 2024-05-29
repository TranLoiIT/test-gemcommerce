import { FacebookFilled, PhoneFilled, SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useEffect } from "react";
import RenderTooltip from "./renderTootip";

const DataExample = new Array(5).fill().map(() => ({
  title: "Trang Điểm",
  id: "trang-diem",
  data: [
    {
      title: "Mắt/EYES",
      id: "trang-diem",
      data: [
        { title: "Phấn mắt", id: "phan-mat" },
        { title: "Bút kẻ mắt", id: "but-ke-mat" },
      ],
    },
    {
      title: "Mặt/FACE",
      id: "trang-diem",
      data: [
        { title: "Kem nền", id: "phan-mat" },
        { title: "BB-Cream & CC-Cream", id: "but-ke-mat" },
        { title: "Phấn phủ", id: "but-ke-mat" },
      ],
    },
    {
      title: "Môi/LIPS",
      id: "trang-diem",
      data: [
        { title: "Son thỏi", id: "phan-mat" },
        { title: "Son nước", id: "but-ke-mat" },
      ],
    },
    {
      title: "Phụ kiện",
      id: "trang-diem",
      data: [
        { title: "Tẩy trang", id: "phan-mat" },
        { title: "Bọt biển makeup", id: "but-ke-mat" },
      ],
    },
  ],
}));

const HeadHomePage = () => {
  useEffect(() => {
    const header = document.querySelector(".page-header");
    const headerTop = document.querySelector(".header-top");
    const toggleClass = "is-sticky";
    const toggleClassTop = "is-hidden";
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        header && header.classList.add(toggleClass);
        headerTop && headerTop.classList.add(toggleClassTop);
      } else {
        header && header.classList.add(toggleClass);
        headerTop && headerTop.classList.remove(toggleClassTop);
      }
    });
  }, []);

  return (
    <>
      <header className="page-header">
        <div className="bg-primary-hearder header-top flex justify-center py-[3px]">
          <div className="container flex justify-between items-center">
            <div className="text-xs">
              Hàng Xách Tay Chính Hãng - Cam Kết Chất Lượng Sản Phẩm
            </div>
            <div className="flex gap-1">
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
        <div className="flex justify-center items-center pt-5 py-2">
          <div className="container">
            <nav>
              {/* logo web */}
              <div className="cursor-pointer w-[120px]">
                <img src="" alt="logo" />
              </div>
              {/* search item */}
              <div className="search-field">
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
              <div className="flex justify-start items-center w-[120px]">
                <PhoneFilled style={{ fontSize: 18, color: "#5f5f5f" }} />
                <div className="ml-[4px]">0123456789</div>
              </div>
            </nav>
            <div>
              <RenderTooltip data={DataExample} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeadHomePage;
