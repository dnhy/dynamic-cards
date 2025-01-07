import type { FC } from "react";
import { memo, useRef } from "react";

import { CustomLogo } from "@/components/Logo";
import "./index.css";

interface Loaderprops {
  isLoading: boolean;
}

const Loader: FC<Loaderprops> = memo((props) => {
  const ref = useRef<HTMLDivElement>(null);
  console.log("props.isLoading", props.isLoading);

  return (
    <>
      {props.isLoading ? (
        <>
          <div className="loader-static" />
          <div className="loader-logo-static">
            <CustomLogo height="150px" />
          </div>
        </>
      ) : (
        <>
          <div className="loader" ref={ref} />
          <div className="loader-logo">
            <CustomLogo
              className="animation"
              height="150px"
              onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) => {
                ref.current?.remove();
                (e.target as HTMLDivElement)?.remove();
              }}
            />
          </div>
        </>
      )}
    </>
  );
});

export default Loader;
