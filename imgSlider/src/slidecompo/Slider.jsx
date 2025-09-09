import { useState } from "react";
import { descriptions, images } from "../compo/Data";

const Slider = () => {
  const [index, setIndex] = useState(4);


  const handL = () => {
    setIndex(p => (p === 0 ? images.length - 1 : p-1))



  }
  const handR = () => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));



  }

  const ranN  = Math.floor(Math.random() * 41) - 20;
  return (
    <div className="relative ">
      <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
        <div className="sm:w-[400px] sm:h-[400px]  w-[300px] h-[300px] relative">
          {images.map((image, i) => (
            <img
              key={i}
              className={`w-full h-full absolute object-cover rounded-3xl  transition-all duration-300  ${
                i === index ? "activeimg" : "inactivimg"
              } `}
              src={image}
              width={500} 
              style={{transform: `rotate(${ index === i ? 0 : ranN }deg)`}}
            />
          ))}
        </div>
        <div className="relative sm:w-[400px] w mt-22 lg:mt-5">
          {descriptions.map((des, i) => (
            <p
              key={i}
              className={`text-center sm:text-xl text-gray-600 absolute transition-all duration-300  ${
                i === index ? "activeDesr delay-200" : "inactiveDescr"
              }`}
            >
              {des}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 lg:-bottom-20 left-1/2 -translate-x-1/2 flex gap-x-5">
        <button className="bg-gray-100 p-1.5  cursor-pointer rounded-full  text-gray-600 hover:bg-gray-200 transition-colors" onClick={handL}>
          <i className="bxr  bx-chevron-left"></i>
        </button>{" "}
       <button className="bg-gray-100 p-1.5  cursor-pointer rounded-full  text-gray-600 hover:bg-gray-200 transition-colors" onClick={handR}>
          <i className="bxr  bx-chevron-right"></i>
        </button>
      </div>

    </div>
  );
};

export default Slider;




// import { useState } from "react";
// import { descriptions, images } from "../compo/Data";

// const Slider = () => {
//   const [index, setIndex] = useState(4);

//   // Handle previous button
//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   // Handle next button
//   const nextSlide = () => {
//     setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative">
//       <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
//         {/* Image section */}
//         <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative">
//           {images.map((image, i) => (
//             <img
//               key={i}
//               className={`w-full h-full absolute object-cover rounded-3xl transition-opacity duration-500 ${
//                 i === index ? "opacity-100" : "opacity-0"
//               }`}
//               src={image}
            
//             />
//           ))}
//         </div>

//         {/* Description section */}
//         <div className="relative sm:w-[400px] mt-5">
//           {descriptions.map((des, i) => (
//             <p
//               key={i}
//               className={`text-center sm:text-xl text-gray-600 absolute transition-opacity duration-500 ${
//                 i === index ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {des}
//             </p>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="absolute bottom-0 lg:-bottom-20 left-1/2 -translate-x-1/2 flex gap-x-5">
//         <button
//           className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
//           onClick={prevSlide}
//         >
//           <i className="bx bx-chevron-left text-xl"></i>
//         </button>

//         <button
//           className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
//           onClick={nextSlide}
//         >
//           <i className="bx bx-chevron-right text-xl"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;