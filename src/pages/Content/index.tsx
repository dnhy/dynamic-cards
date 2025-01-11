import ContentMain from "@/components/ContentMain/index.tsx";
import ContentTop from "@/components/ContentTop/index.tsx";
import styles from "./index.module.css";
import clsx from "clsx";

const Content = () => {
  return (
    <div className={clsx(styles["main-content"])}>
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
