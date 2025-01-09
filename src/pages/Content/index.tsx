import ContentMain from "@/components/ContentMain/index.tsx";
import ContentTop from "@/components/ContentTop/index.tsx";
import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles["main-content"]}>
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
