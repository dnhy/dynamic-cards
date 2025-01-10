import { type FC, useEffect, useMemo, useRef } from "react";
import "./index.css";

interface ICircleProp {
  radius?: number;
  progress: number;
  strokeWidth?: number;
  strokeF?: string;
  strokeB?: string;
}

const CircleProgress: FC<ICircleProp> = (props) => {
  const optionsDefault = {
    radius: 50,
    progress: 0,
    strokeF: "var(--clr-pumpkin,#fe6c00)",
    strokeB: "var(--clr-jet,#302924)",
    strokeWidth: 20,
  };

  const options = {
    ...optionsDefault,
    ...props,
  };

  const { radius, progress, strokeB, strokeF, strokeWidth } = options;

  const circumference = useMemo<number>(() => 2 * Math.PI * radius, [radius]); //周长=虚线段长度
  const offset = useMemo<number>(
    () => circumference - (circumference * progress) / 100,
    [circumference, progress]
  ); //进度=虚线段偏移量
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    circleRef.current?.style.setProperty(
      "--stroke-dashoffset",
      offset.toString()
    );
    circleRef.current?.style.setProperty(
      "--stroke-dashArray",
      circumference.toString()
    );
    circleRef.current?.style.setProperty(
      "--basic-strokeWidth",
      strokeWidth + "px"
    );
  }, [offset, circumference, strokeWidth]);

  return (
    <div className="progress-bar">
      <svg>
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className="backCircle"
          stroke={strokeB}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          ref={circleRef}
          cx="50%"
          cy="50%"
          r={radius}
          className="frontCircle"
          strokeWidth={strokeWidth}
          stroke={strokeF}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        ></circle>
      </svg>
      <div className="progressText">{progress}%</div>
    </div>
  );
};

export default CircleProgress;
