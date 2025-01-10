import Card from "../Card";
import { type ICard } from "../type";
interface CardStackerProps {
  data: ICard[];
}

export default function CardStacker({ data }: CardStackerProps) {
  return (
    <div className="flex card-stacker py-10 select-none">
      {data.map((eachData: ICard, index: number) => (
        <Card
          {...eachData}
          key={index}
          className={
            index !== 0 ? "-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]" : ""
          }
        />
      ))}
    </div>
  );
}
