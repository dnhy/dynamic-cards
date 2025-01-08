import ContentMain from "@/components/ContentMain/index.tsx";
import ContentTop from "@/components/ContentTop/index.tsx";
import "./index.css";
const Content = () => {
  return (
    <div className="main-content">
      <ContentTop></ContentTop>
      <ContentMain></ContentMain>
    </div>
  );
};

export default Content;
