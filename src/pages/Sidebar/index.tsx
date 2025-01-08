import { navigationLinks } from "@/data/data";
import { personsImgs } from "@/utils/images";
import { NavigationLink } from "@/data/type.ts";
import "./index.css";
import { useContext, useState } from "react";
import { SidebarContext } from "@/context/sidebarContext.tsx";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSideBarOpen } = useContext<any>(SidebarContext);
  console.log("isSideBarOpen :", isSideBarOpen);
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
            <li className="nav-item" key={eachData.id}>
              <a
                className={`nav-link ${
                  activeLinkIdx === eachData.id ? "active" : null
                }`}
              >
                <img src={eachData.image} alt={eachData.title} />
                <span>{eachData.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
