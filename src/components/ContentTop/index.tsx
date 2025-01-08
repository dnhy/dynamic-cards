import { useContext } from "react";
import { iconsImgs } from "@/utils/images.ts";
import "./index.css";
import { SidebarContext } from "@/context/sidebarContext.tsx";

const ContentTop = () => {
  const { toggleDispatch } = useContext<any>(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button className="sidebar-toggle" onClick={toggleDispatch}>
          <img src={iconsImgs.menu} alt="" />
        </button>
        <div className="title">Home</div>
      </div>
      <div className="content-top-btn">
        <button className="search-btn">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="search-btn">
          <img src={iconsImgs.bell} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
