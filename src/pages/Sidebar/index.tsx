import { navigationLinks } from "@/data/data";
import { personsImgs } from "@/utils/images";
import { NavigationLink } from "@/data/type.ts";
import "./index.css";
import { useContext, useState } from "react";
import { SidebarContext } from "@/context/sidebarContext.tsx";
import { PostItemHoverOverlayAlways } from "../../components/PostItemHoverOverlayAlways/index.tsx";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const { isSideBarOpen } = useContext<any>(SidebarContext);
  // const unSelectBorder: React.CSSProperties = {
  //   border: "1px solid var(--clr-primar-light)",
  // };
  const selectBorder: React.CSSProperties = {
    backgroundColor: "var(--clr-pumpkin)",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  };
  return (
    <div className={`sidebar ${isSideBarOpen ? "sidebar-change" : null}`}>
      <div className="userinfo">
        <div className="info-img img-fit-vover">
          <img src={personsImgs.person_two} alt="" />
        </div>
        <div className="info-name">dnhy</div>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((eachData: NavigationLink) => (
            <li
              className="nav-item relative flex flex-col focus-visible:!shadow-none"
              key={eachData.id}
              onClick={() => {
                setActiveLinkIdx(eachData.id);
              }}
            >
              {activeLinkIdx !== eachData.id ? (
                // <PostItemHoverOverlay border={unSelectBorder} />
                ""
              ) : (
                <PostItemHoverOverlayAlways border={selectBorder} />
              )}
              <a
                className={`nav-link ${
                  activeLinkIdx === eachData.id ? "active1" : null
                }`}
              >
                <img
                  className="relative"
                  src={eachData.image}
                  alt={eachData.title}
                />
                <span className="relative">{eachData.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
