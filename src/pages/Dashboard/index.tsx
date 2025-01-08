import "@/assets/styles/dashboard.css";
import Sidebar from "@/pages/Sidebar";
import Content from "@/pages/Content";
import Styles from "./index.module.css";

export const Dashboard = () => {
  return (
    <div className={`${Styles["container"]}`}>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
};
