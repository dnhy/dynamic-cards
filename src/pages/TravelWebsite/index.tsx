import bac1 from "@/assets/travel/bac 1.png";
import bac3 from "@/assets/travel/bac 3.png";
import bac4 from "@/assets/travel/bac 4.png";
import bac2_2 from "@/assets/travel/bac 2.2.png";
// import LoadingSpinner from "@/components/LoadingSpinner";
import Loader from "@/components/Loader";
import "./index.css";
import { useState, useEffect, useRef } from "react";

export default function TravelWebsite() {
  const [isLoading, setIsLoading] = useState(true);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const images = [bac1, bac3, bac4, bac2_2];

  //   const handleLoad = () => {
  //     setIsLoading(false);
  //   };

  //   const preloadImage = (src: string) => {
  //     return new Promise<void>((resolve) => {
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = () => resolve();
  //     });
  //   };

  //   Promise.all(images.map(preloadImage)).then(() => {
  //     handleLoad();
  //   });
  // }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // 监听所有图片的加载事件
    const images = document.querySelectorAll("img");
    // const images = imagesContainerRef.current?.querySelectorAll("img");

    let loadedImagesCount = 0;
    images?.forEach((img) => {
      if (img.complete) {
        loadedImagesCount++;
      } else {
        img.addEventListener("load", () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            handleLoad();
          }
        });
      }
    });

    // 如果所有图片都已经加载完成
    if (loadedImagesCount === images?.length) {
      handleLoad();
    }
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      {/* {isLoading && <LoadingSpinner />} */}
      <div
        ref={imagesContainerRef}
        style={{
          background: `url(${bac4}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "100% 80%",
          display: isLoading ? "none" : "block",
        }}
        className="w-screen h-screen overflow-hidden relative  select-none content"
      >
        <div className="head w-full absolute z-10">
          <div className="h-[50px] flex justify-center">
            <div className="nav bg-[rgb(255,255,255,0.2)] backdrop-blur-sm flex justify-around items-center text-center  rounded-b-3xl px-[5%] py-[10px] shadow-[0px_2px_8px_rgb(0,0,0,0.4)] gap-[10px]  select-none">
              <a className="active w-[110px]  py-[15px] text-[18px] font-medium tracking-widest rounded-b-3xl cursor-pointer transition-all duration-300">
                Home
              </a>
              <a className="w-[110px]  py-[15px] text-[18px] font-medium tracking-widest rounded-b-3xl cursor-pointer transition-all duration-300">
                About
              </a>
              <a className="w-[110px]  py-[15px] text-[18px] font-medium tracking-widest rounded-b-3xl cursor-pointer transition-all duration-300">
                Reviews
              </a>
              <a className="w-[110px]  py-[15px] text-[18px] font-medium tracking-widest rounded-b-3xl cursor-pointer transition-all duration-300">
                Gallery
              </a>
              <a className="w-[110px]  py-[15px] text-[18px] font-medium tracking-widest rounded-b-3xl cursor-pointer transition-all duration-300">
                Contacts
              </a>
            </div>
          </div>
        </div>
        <img
          src={bac3}
          alt=""
          className="absolute bottom-[-12%] max-w-none pointer-events-none back-3"
        />
        <div className="title text-white absolute top-[5%] right-1/2 translate-x-1/2 translate-y-1/2">
          <h3 className="text-2xl font-normal tracking-[15px] text-center">
            The Land of Serene Beauty
          </h3>
          <h1 className="text-[15rem] font-extrabold -mt-12 uppercase tracking-[50px]">
            kerala
          </h1>
        </div>
        <img
          src={bac2_2}
          alt=""
          className="absolute bottom-[-12%] max-w-none  pointer-events-none back-2"
        />
        <img
          src={bac1}
          alt=""
          className="absolute bottom-[-11%] max-w-none  pointer-events-none back-1"
        />
        <div className="w-full flex justify-center info-wrap text-white/[0.7] absolute bottom-[20%] z-10">
          <p className="w-[70%] text-center tracking-[1px]">
            Kerala is a tropical paradise in southern India, known for its
            breathtaking landscapes, rich culture, and serene backwaters.
            Whether you're seeking adventure, relaxation, or a taste of India's
            unique traditions, Kerala has something for everyone. From the lush
            hill stations to pristine beaches, and Ayurvedic retreats to vibrant
            festivals, this enchanting state offers a perfect blend of natural
            beauty and cultural experiences.
          </p>
        </div>
        <div className="cta w-full flex justify-center text-white/[0.8] absolute bottom-[10%] z-10">
          <button className="explore text-[18px] font-extrabold tracking-[3px] bg-transparent border-[1px] border-solid border-white/[0.8] rounded-[50px] w-[300px] h-[50px] flex justify-center items-center gap-2 cursor-pointer">
            Explore More
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="slider text-white/[0.4] w-full flex justify-between absolute top-1/2">
          <i className="fa-solid fa-chevron-left px-[5%] text-4xl text-white/[0.4]"></i>
          <i className="fa-solid fa-chevron-right px-[5%] text-4xl text-white/[0.4]"></i>
        </div>
      </div>
    </>
  );
}
