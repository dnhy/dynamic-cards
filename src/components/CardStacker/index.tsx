import Card from "../Card";
import { type ICard } from "../type";
export default function CardStacker({ data }: { data: ICard[] }) {
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
