import { FacebookFilled, PhoneFilled, SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useEffect } from "react";

const HeadHomePage = () => {
  useEffect(() => {
    const header = document.querySelector(".page-header");
    const toggleClass = "is-sticky";
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
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
            <div className="text-xs">aaaaaaaaaaaaaaaaaa</div>
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
        <div className="flex justify-center items-center py-5">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default HeadHomePage;
