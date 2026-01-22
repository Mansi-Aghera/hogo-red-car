// import { useState } from "react";
// import { themes } from "../config/themeConfig";
// import DecoratedTitle from "./DecoratedTitle";
// import SectionHeading from "./SectionHeading";

// const faqs = [
//     {
//         q: "through the cites of the word in ?",
//         a: "through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 "
//     },
//     {
//         q: "through the cites of the word in ?",
//         a: "through the cites of the word in classical literature, discovered the undoubtable source."
//     },
//     {
//         q: "through the cites of the word in ?",
//         a: "through the cites of the word in classical literature,"
//     },
//     {
//         q: "through the cites of the word in ?",
//         a: "through the cites of the word in classical literature,"
//     },
//     {
//         q: "through the cites of the word in ?",
//         a: "through the cites of sections 1.10.32 and 1.10.33 "
//     },
// ];

// export default function FAQView() {
//     const [active, setActive] = useState(0);

//     return (
//         <section
//             className="py-24"
//             style={{ backgroundColor: themes.backgroundBlack }}
//         >
//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

//                 {/* LEFT */}
//                 <div>
//                     <DecoratedTitle text="EVERYTHING YOU NEED TO KNOW" style={{ color: themes.backgroundBlack }} />
//           <SectionHeading
//   secondLine="Question"
//   className="text-left mx-0 mt-4"
//   style={{ color: themes.textWhite }}
// >
//   Frequently Asked
// </SectionHeading>



//                 </div>

//                 {/* RIGHT */}
//                 <div className="space-y-6">
//                     {faqs.map((item, i) => (
//                         <div
//                             key={i}
//                             className="border-b pb-6 cursor-pointer"
//                             style={{ borderColor: themes.backgroundGray }}
//                             onClick={() => setActive(active === i ? null : i)}
//                         >
//                             <div className="flex justify-between items-center gap-4">
//                                 <h3
//                                     className="text-lg font-medium"
//                                     style={{ color: themes.textWhite }}
//                                 >
//                                     {item.q}
//                                 </h3>

//                                 <span
//                                     className={`transition-transform duration-300 ${active === i ? "rotate-180" : ""
//                                         }`}
//                                     style={{ color: themes.textWhite }}
//                                 >
//                                     ▼
//                                 </span>
//                             </div>

//                             <div
//                                 className={`overflow-hidden transition-all duration-300 ${active === i ? "max-h-40 mt-4" : "max-h-0"
//                                     }`}
//                             >
//                                 <p
//                                     className="leading-relaxed opacity-80"
//                                     style={{ color: themes.textWhite }}
//                                 >
//                                     {item.a}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useState, useRef, useEffect } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
import SectionHeading from "./SectionHeading";
 
const faqs = [
  {
    q: "through the cites of the word in ?",
    a: "through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
  },
  {
    q: "through the cites of the word in ?",
    a: "through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    q: "through the cites of the word in ?",
    a: "through the cites of the word in classical literature,",
  },
  {
    q: "through the cites of the word in ?",
    a: "through the cites of the word in classical literature,",
  },
  {
    q: "through the cites of the word in ?",
    a: "through the cites of sections 1.10.32 and 1.10.33 ",
  },
];
 
export default function FAQView() {
  const [active, setActive] = useState(null);
 
  /* ================= SCROLL ANIMATION ================= */
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
 
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className="py-24"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
 
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Decorated Title */}
          <div
            className={`
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <DecoratedTitle
              text="EVERYTHING YOU NEED TO KNOW"
              style={{ color: themes.backgroundBlack }}
            />
          </div>
 
          {/* Heading */}
          <div
            className={`
              mt-4 transition-all duration-700 ease-out delay-150
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <SectionHeading
              secondLine="Question"
              className="text-left mx-0"
              style={{ color: themes.textWhite }}
            >
              Frequently Asked
            </SectionHeading>
          </div>
        </div>
 
        {/* ================= RIGHT SIDE (FAQ LIST) ================= */}
        <div
          className={`
            space-y-6
            transition-all duration-900 ease-out delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b pb-6 cursor-pointer"
              style={{ borderColor: themes.backgroundGray }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3
                  className="text-lg font-medium"
                  style={{ color: themes.textWhite }}
                >
                  {item.q}
                </h3>
 
                <span
                  className={`transition-transform duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                  style={{ color: themes.textWhite }}
                >
                  ▼
                </span>
              </div>
 
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p
                  className="leading-relaxed opacity-80"
                  style={{ color: themes.textWhite }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}