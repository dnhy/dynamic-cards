import { iconsImgs } from "@/utils/images.ts";
import { PropsWithChildren, type FC } from "react";
import "./index.css";

const GridTitle: FC<PropsWithChildren & { title: string }> = ({
  title,
  children,
}) => {
  return (
    <div className="grid-c-title">
      <h3>{title}</h3>
      <button className="grid-c-title-add">
        <img src={iconsImgs.plus} alt="" />
      </button>
      {children}
    </div>
  );
};

export default GridTitle;
