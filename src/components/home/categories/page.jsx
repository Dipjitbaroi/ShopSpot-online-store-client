import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Categories() {
  const scrollRef = useRef(null);

  // Fake JSON data
  const categoryData = [
    {
      id: 1,
      name: "Phones",
      icon: "https://st2.depositphotos.com/4845131/7223/v/950/depositphotos_72231945-stock-illustration-icon-mobile-shopping.jpg",
    },
    {
      id: 2,
      name: "Computers",
      icon: "https://t3.ftcdn.net/jpg/01/14/34/28/360_F_114342835_4xUSqvc7Sy5uKWxDc4tnYYXYbrh6ShLN.jpg",
    },
    {
      id: 3,
      name: "SmartWatch",
      icon: "https://t3.ftcdn.net/jpg/00/95/60/62/360_F_95606285_x1IGnaXMyUpKj2cWp8oUiA0W25As9xjw.jpg",
    },
    {
      id: 4,
      name: "Camera",
      icon: "https://static.vecteezy.com/system/resources/previews/006/998/431/non_2x/photo-camera-icons-photo-camera-icon-design-illustration-photo-camera-simple-sign-photo-camera-image-vector.jpg",
    },
    {
      id: 5,
      name: "HeadPhones",
      icon: "https://t4.ftcdn.net/jpg/05/16/03/15/360_F_516031586_nB4i5ZFkmrrj6Jxk7FMMNDhCDjWbfn4b.jpg",
    },
    {
      id: 6,
      name: "Gaming",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/000/362/126/small_2x/Universal__2824_29.jpg",
    },
    {
      id: 436,
      name: "Gaming",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/000/362/126/small_2x/Universal__2824_29.jpg",
    },
    {
      id: 4363,
      name: "Gaming",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/000/362/126/small_2x/Universal__2824_29.jpg",
    },
    {
      id: 4336,
      name: "Gaming",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/000/362/126/small_2x/Universal__2824_29.jpg",
    },
    {
      id: 46,
      name: "Gaming",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/000/362/126/small_2x/Universal__2824_29.jpg",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 py-6 max-w-7xl mt-10 mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-8 bg-red-500"></div>
        <h1 className="text-2xl font-bold text-red-600">Categories</h1>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Browse By Category</h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
          <AiOutlineArrowLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth mx-8">
          {categoryData.map((category) => (
            <div
              key={category.id}
              className="min-w-[110px] flex flex-col items-center justify-center p-4 border rounded hover:shadow transition">
              <img
                src={category.icon}
                alt={category.name}
                className="w-10 h-10  object-cover mb-2"
              />
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
