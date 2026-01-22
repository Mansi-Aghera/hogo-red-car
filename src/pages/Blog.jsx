// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/blogBanner.jpg"; // banner image
// import RollingButton from "../components/RollingButton";

// import b1 from "../assets/images/blog1.jpg";
// import b2 from "../assets/images/blog2.jpg";
// import b3 from "../assets/images/blog3.jpg";
// import b4 from "../assets/images/blog4.jpg";
// import b5 from "../assets/images/blog5.jpg";
// import b6 from "../assets/images/blog6.jpg";

// const blogs = [
//   {
//     date: "28",
//     month: "Jul",
//     title: "Interior Detailing Tips to Refresh Seats, Dash, and More Fast",
//     img: b1,
//   },
//   {
//     date: "28",
//     month: "Jul",
//     title: "Car Detailing Through the Years: How Techniques Have Evolved",
//     img: b2,
//   },
//   {
//     date: "28",
//     month: "Jul",
//     title: "Engine Bay Detailing: Improve Performance and Impress Buyers",
//     img: b3,
//   },
//   {
//     date: "28",
//     month: "Jul",
//     title: "How to Protect Car Paint Against Sun, Dirt, Rain and Dust",
//     img: b4,
//   },
//   {
//     date: "28",
//     month: "Jul",
//     title: "5 Detailing Mistakes That Could Damage Your Car’s Appearance",
//     img: b5,
//   },
//   {
//     date: "28",
//     month: "Jul",
//     title: "Ceramic Coating Benefits: What Every Car Owner Should Know",
//     img: b6,
//   },
// ];

// export default function BlogPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section
//         className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
//         />

//         <div className="relative z-10 max-w-4xl w-full">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{
//               color: themes.textWhite,
//               fontFamily: themes.fontPrimary,
//             }}
//           >
//             Blog
//           </h1>

//           <div className="w-full h-[1px] my-6 bg-white/20" />

//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link
//               to="/"
//               className="font-bold transition"
//               style={{ color: themes.backgroundGray }}
//             >
//               Home
//             </Link>

//             <span style={{ color: themes.textWhite }}>›</span>

//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Blog
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* BLOG GRID */}
//       <section
//       className="py-24 px-6"
//       style={{ backgroundColor: themes.backgroundGray }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((item, i) => (
//           <div
//             key={i}
//             className="rounded-2xl overflow-hidden"
//             style= {{backgroundColor: themes.backgroundBlack}}
//           >
//             {/* Image */}
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-[260px] object-cover"
//             />

//             {/* Content */}
//             <div className="p-6 relative">
//               {/* Date badge */}
//               <div
//                 className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center"
//                 style={{ backgroundColor: themes.primary }}
//               >
//                 <span className="text-xl font-bold text-white">
//                   {item.date}
//                 </span>
//                 <span className="text-sm text-white">{item.month}</span>
//               </div>

//               <h3
//                 className="text-lg font-semibold mt-8 leading-snug"
//                 style={{ color: themes.textWhite }}
//               >
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     </>
//   );
// }


import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

import { themes } from "../config/themeConfig";

import bg from "../assets/images/blogBanner.jpg";

import RollingButton from "../components/RollingButton";
 
import b1 from "../assets/images/blog1.jpg";

import b2 from "../assets/images/blog2.jpg";

import b3 from "../assets/images/blog3.jpg";

import b4 from "../assets/images/blog4.jpg";

import b5 from "../assets/images/blog5.jpg";

import b6 from "../assets/images/blog6.jpg";
 
const blogs = [

  { date: "28", month: "Jul", title: "Interior Detailing Tips to Refresh Seats, Dash, and More Fast", img: b1 },

  { date: "28", month: "Jul", title: "Car Detailing Through the Years: How Techniques Have Evolved", img: b2 },

  { date: "28", month: "Jul", title: "Engine Bay Detailing: Improve Performance and Impress Buyers", img: b3 },

  { date: "28", month: "Jul", title: "How to Protect Car Paint Against Sun, Dirt, Rain and Dust", img: b4 },

  { date: "28", month: "Jul", title: "5 Detailing Mistakes That Could Damage Your Car’s Appearance", img: b5 },

  { date: "28", month: "Jul", title: "Ceramic Coating Benefits: What Every Car Owner Should Know", img: b6 },

];
 
export default function BlogPage() {

  /* ================= SCROLL ANIMATION ================= */

  const heroRef = useRef(null);

  const gridRef = useRef(null);
 
  const [heroVisible, setHeroVisible] = useState(false);

  const [gridVisible, setGridVisible] = useState(false);
 
  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            if (entry.target === heroRef.current) setHeroVisible(true);

            if (entry.target === gridRef.current) setGridVisible(true);

          }

        });

      },

      { threshold: 0.3 }

    );
 
    if (heroRef.current) observer.observe(heroRef.current);

    if (gridRef.current) observer.observe(gridRef.current);
 
    return () => observer.disconnect();

  }, []);
 
  return (
<>

      {/* ================= HERO ================= */}
<section

        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"

        style={{

          backgroundImage: `url(${bg})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

        }}
>
<div className="absolute inset-0 bg-black/65" />
 
        <div

          ref={heroRef}

          className={`

            relative z-10 max-w-4xl w-full

            transition-all duration-700 ease-out

            ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}

          `}
>
<h1

            className="text-3xl sm:text-4xl md:text-5xl font-bold"

            style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
>

            Blog
</h1>
 
          <div className="w-full h-[1px] my-6 bg-white/20" />
 
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
<Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>

              Home
</Link>
<span style={{ color: themes.textWhite }}>›</span>
<span className="font-bold" style={{ color: themes.textWhite }}>

              Blog
</span>
</div>
</div>
</section>
 
      {/* ================= BLOG GRID ================= */}
<section className="py-24 px-6" style={{ backgroundColor: themes.backgroundGray }}>
<div

          ref={gridRef}

          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
>

          {blogs.map((item, i) => (
<div

              key={i}

              className={`

                rounded-2xl overflow-hidden

                transition-all duration-700 ease-out

                ${gridVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}

              `}

              style={{

                backgroundColor: themes.backgroundBlack,

                transitionDelay: `${i * 180}ms`,

              }}
>

              {/* Image */}
<img

                src={item.img}

                alt={item.title}

                className="w-full h-[260px] object-cover transition-transform duration-700 hover:scale-105"

              />
 
              {/* Content */}
<div className="p-6 relative">

                {/* Date badge */}
<div

                  className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center shadow-lg"

                  style={{ backgroundColor: themes.primary }}
>
<span className="text-xl font-bold text-white">{item.date}</span>
<span className="text-sm text-white">{item.month}</span>
</div>
 
                <h3

                  className="text-lg font-semibold mt-8 leading-snug"

                  style={{ color: themes.textWhite }}
>

                  {item.title}
</h3>
</div>
</div>

          ))}
</div>
</section>
</>

  );

}

 