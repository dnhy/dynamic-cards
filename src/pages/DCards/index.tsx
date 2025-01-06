/* 
动态卡片
https://www.youtube.com/watch?v=F1rWdCDEixs&t=98s
*/
import CardStacker from "@/components/CardStacker";

export default function dCards() {
  const data = [
    {
      title: "Kirby",
      subtitle: "Star Allies",
      rating: "4.7",
      backgroundColors: { top: "#51D1F7", bottom: "#5B8FEF" },
      image: "img1.png",
    },
    {
      title: "Mario",
      subtitle: "Super Bros",
      rating: "4.8",
      backgroundColors: { top: "#F85B6B", bottom: "#E83842" },
      image: "img2.png",
    },
    {
      title: "Pokemon",
      subtitle: "Bulbasaur",
      rating: "4.9",
      backgroundColors: { top: "#28DFAB", bottom: "#26CBCF" },
      image: "img3.png",
    },
    {
      title: "Sonic",
      subtitle: "Blue Sonic",
      rating: "4.9",
      backgroundColors: { top: "#6F3FF1", bottom: "#6E3CCA" },
      image: "img4.png",
    },
    {
      title: "Pokemon",
      subtitle: "Pikachu",
      rating: "5.0",
      backgroundColors: { top: "#FBDA35", bottom: "#E3A237" },
      image: "img5.png",
    },
  ];
  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <CardStacker data={data} />
    </div>
  );
}
