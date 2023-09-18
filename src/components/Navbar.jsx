import logo from "../images/Asset-1.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media";

function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");
  const showSideHandler = (e) => {
    setShowSide((showSide) => !showSide);
    console.log("clicked");
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // New state for tracking scrolling

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfPage = window.innerHeight / 2;
      setIsScrolled(scrollY >= halfPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div
      className={`md:grid md:grid-cols-2 items-baseline pt-0 mt-0 ${
        isScrolled ? "bg-white" : "" 
      }`}
    >
      {/* LIJEVO */}
<div className=" md:pl-10 flex justify-between items-center">
  <div className="flex items-center gap-3 pb-10">
    <button
      type="button"
      className="hidden md:flex md:flex-col md:gap-2 md:p-4 cursor-pointe z-50"
      onClick={showSideHandler}
    >
      <motion.span
        className={`line-1 block h-0.5 w-8 bg-content${!matches ? "bg-white" : "bg-slate-900"} ${showSide ? "bg-white" : "bg-slate-900"}`}
        animate={{
          rotateZ: showSide ? -45 : 0,
          y: showSide ? -10 : -5,
          width: showSide ? 24 : 24,
        }}
      ></motion.span>
      <motion.span
        className={`line-1 block h-0.5 w-8 bg-content${!matches ? "bg-white" : "bg-slate-900"} ${showSide ? "bg-white" : "bg-slate-900"}`}
        animate={{
          rotateZ: showSide ? 40 : 0,
          y: showSide ? -20 : -5,
          width: showSide ? 24 : 24,
        }}
      ></motion.span>
    </button>
    <div>
      <a href="/">
        <img src={logo} alt="logo" className="m-5 md:m-0 w-1/2 lg:w-1/2 lg:h-1/2" />
      </a>
    </div>
  </div>
  <div className="flex justify-end items-end pb-20 md:hidden">
    <button
      type="button"
      className="flex flex-col gap-2 pt-10 pr-4 cursor-pointer text-black z-50"
      onClick={showSideHandler}
    >
      <motion.span
        className={`line-1 block h-0.5 w-8 bg-content ${!matches ? "bg-slate-900" : "bg-white"} ${showSide ? "bg-black" : "bg-black"}`}
        animate={{
          rotateZ: showSide ? -45 : 0,
          y: showSide ? -10 : -5,
          width: showSide ? 24 : 24,
        }}
      ></motion.span>
      <motion.span
        className={`line-1 block h-0.5 w-8 bg-content ${!matches ? "bg-slate-900" : "bg-white"} ${showSide ? "bg-black" : "bg-black"}`}
        animate={{
          rotateZ: showSide ? 40 : 0,
          y: showSide ? -20 : -5,
          width: showSide ? 24 : 24,
        }}
      ></motion.span>
    </button>
  </div>
</div>
{/* DESNO */}
<div className="mt-5  hidden md:block">
  <ul className="font-semibold flex gap-10  justify-center overflow-visible h-10">
    <li className="flex flex-col items-end group whitespace-nowrap ">
      <span className="text-xs">01</span>
      <div className="flex items-center gap-2">
        <a className="active:text-red-600 " href="/digitalno-oglasavanje">
          <p className=" text-base  hover:text-red-500 transition duration-200 ease-in-out">Digitalno oglašavanje</p>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <ul className="mt-3   p-2 hidden rounded-lg space-y-3 cursor-pointer bg-white group-hover:block absolute shadow-2xl  top-20 2xl:top-20">
      <li className="text-left pl-3 hover:bg-gray-100 hover:text-red-400">
        <a href="/google-ads">
        <p className="">Google Ads</p></a>
        </li>
        <li className="text-left pl-3 hover:bg-gray-100 hover:text-red-400">
          <a href="/facebook-oglasavanje">
          <p className="">Facebook oglašavanje</p></a>
        </li>
        <li className="text-left pl-3 hover:bg-gray-100 hover:text-red-400">
        <a href="/viber-oglasavanje">
        <p className="">Viber oglašavanje</p></a>
        </li>
        <li className="text-left pl-3 pb-3 hover:bg-gray-100 hover:text-red-400">
         
          <a href="/content-marketing">
          <p className="">Content marketing</p></a>
        </li>
      </ul>
    </li>
    <li className="flex flex-col items-end group whitespace-nowrap  ">
      <span className="text-xs">02</span>
      <div className="flex items-center gap-2">
        <a href="drustvene-mreze">
        <p className="text-base  hover:text-red-500 transition duration-200 ease-in-out">
          Društvene mreže</p></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <ul className="mt-3 p-2 hidden rounded-lg space-y-3 cursor-pointer bg-white group-hover:block absolute transition duration-200 ease-in-out shadow-2xl  top-20 2xl:top-20">
        <li className=" pt-3 hover:bg-gray-100 hover:text-red-400">
         <a href="vodenje-facebook-stranice">
          <p className="">Vođenje Facebook <br /> stranice</p> </a>
        </li>
        <li className=" pb-2 hover:bg-gray-100 hover:text-red-400">
          
          <a href="vodenje-instagram-profila">
          <p className="">Vođenje Instagram <br/> profila</p></a>
        </li>
      </ul>
    </li>
    <li className="flex flex-col items-end group whitespace-nowrap text-sm  transition duration-3000">
      <span className="text-xs">03</span>
      <div className="flex items-center gap-2">
        <a href="web-i-desing">
        <p className="text-base hover:text-red-500 transition duration-200 ease-in-out">Web &amp; Design</p></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <ul className="mt-3 p-2 hidden rounded-lg space-y-3 cursor-pointer bg-white group-hover:block absolute shadow-2xl  top-20 2xl:top-20">
        <li className="top-5 hover:bg-gray-100 hover:text-red-400">
          
          <a href="/izrada-web-stranice">
          <p className=""> Izrada web stranice</p>
          </a>
        </li>
        
        <li className="text-left  hover:bg-gray-100 hover:text-red-400">
        <a href="izrada-web-shopa">
        <p className=""> Izrada web shopa </p></a>
        </li>
        <li className="text-left pb-2 hover:bg-gray-100 hover:text-red-400">
          <a href="graficki-dizajn">
        <p className=""> Grafički dizajn</p> </a>
        </li>
      </ul>
    </li>
  </ul>
</div>
     

      {matches ? (
        <>
          {showSide && <div className="fixed inset-0 bg-black z-10"></div>}
          {showSide && (
            <div className="fixed inset-0 z-10 flex flex-col items-left justify-between py-10 pl-5">
              <div></div>
              <div>
                <ul className="flex flex-col items-left font-bold text-white  lg:prose-2xl">
                  <li className="group transition duration-1000 flex gap-2 items-start justify-start hover:text-red-600 hover:translate-x-5">
                    <a href=""></a>
                    <span className="text-gray-500 font-bold text-xs pt-1 opacity-100 group-hover:opacity-0">
                      01
                    </span>
                    <span className="text-4xl"> <a href="/o-nama">O nama</a> </span>
                  
                  </li>
                  <li className="group transition duration-1000 flex gap-2 items-start justify-start hover:text-red-600 hover:translate-x-5">
                    <a href=""></a>
                    <span className="text-gray-500 text-xs pt-1 opacity-100 group-hover:opacity-0">
                      02
                    </span>
                    <span className="text-4xl"> <a href="/blog">Blog</a> </span>
                 
                  </li>
                  <li className="group transition duration-1000 flex gap-2 items-start justify-start hover:text-red-600 hover:translate-x-5">
                    <a href=""></a>
                    <span className="text-gray-500 text-xs pt-1 opacity-100 group-hover:opacity-0">
                      03
                    </span>
                    <span className="text-4xl"> <a href="/portfolio">Portfolio</a> </span>
                  </li>
                  <li className="group transition duration-1000 flex gap-2 items-start justify-start hover:text-red-600 hover:translate-x-5">
                    <a href=""></a>
                    <span className="text-gray-500 text-xs pt-1 opacity-100 group-hover:opacity-0">
                      04
                    </span>
                    <span className="text-4xl"><a href="/kontakt">Kontakt</a> </span>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-white">Epepe d.o.o</p>
                <p className="text-gray-500">Korzo 11, HR51000 Rijeka</p>
                <p className="text-gray-500">info@epepe.hr</p>
                <p className="text-gray-500">Tel: +385 (51) 588 308</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <p></p>
      )}
      {!matches ? (
        <>
          {showSide && <div className="fixed inset-0 bg-white z-10"></div>}
          {showSide && (
            <div className="fixed inset-0 z-10 items-left justify-between py-20 pl-5">
              <div className="">
               
              </div>
              <ul className=" text-md space-y-3">
                <li className="  group px-4 ">
                  <div
                    className="flex justify-between items-center gap-2 "
                    onClick={() => handleAccordionClick(1)}
                  >
                    <a href="#">Digitalno oglašavanje</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`w-4 h-4 transform ${
                        activeIndex === 1 ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`mt-3 ${
                      activeIndex === 1 ? "block" : "hidden"
                    } rounded-lg w-52 space-y-3 cursor-pointer text-sm bg-white`}
                  >
                    <li className="text-left pl-3 pt-3 hover:bg-gray-100 hover:text-red-400">
                    <a className="active:text-red-600 " href="/google-ads">
                      Google Ads
                      </a>
                    </li>
                    <li className="text-left pl-3 hover:bg-gray-100 hover:text-red-400">
                    <a className="active:text-red-600 " href="/facebook-oglasavanje">
                      Facebook oglašavanje
                      </a>
                    </li>
                    <li className="text-left pl-3 hover:bg-gray-100 hover:text-red-400">
                    <a className="active:text-red-600 " href="/viber-oglasavanje">
                      Viber oglašavanje
                      </a>
                    </li>
                    <li className="text-left pl-3 pb-3 hover:bg-gray-100 hover:text-red-400">
                    <a className="active:text-red-600 " href="/content-marketing">
                      Content marketing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group px-4">
                  <div
                    className="flex justify-between items-center gap-2"
                    onClick={() => handleAccordionClick(2)}
                  >
                    <a href="#">Društvene mreže</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`w-4 h-4 transform ${
                        activeIndex === 2 ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`mt-3 ${
                      activeIndex === 2 ? "block" : "hidden"
                    } w-36 text-sm rounded-lg space-y-3 cursor-pointer bg-white`}
                  >
                    <li className="text-left pl-3 pt-3 hover:bg-gray-100 hover:text-red-400">
                    <a className="active:text-red-600 " href="/vodenje-facebook-stranice">
                      Vođenje Facebook stranice
                      </a>
                    </li>
                    <li className="text-left pl-3 pb-2 hover:bg-gray-100 hover:text-red-400">
                    <a className="active:text-red-600 " href="/vodenje-instagram-profila">
                      Vođenje Instagram profila
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group px-4">
                  <div
                    className="flex justify-between items-center gap-2"
                    onClick={() => handleAccordionClick(3)}
                  >
                    <a href="web-i-desing">Web &amp; Design</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`w-4 h-4 transform ${
                        activeIndex === 3 ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`mt-3 ${
                      activeIndex === 3 ? "block" : "hidden"
                    } w-full rounded-lg space-y-3 cursor-pointer bg-white`}
                  >
                    <li className="text-left pl-3 pt-3 hover:bg-gray-100 hover:text-red-400">
                      Izrada web stranice
                    </li>
                    <li className="text-left pl-3 hover:bg-gray-100 hover:text-red-400">
                      Izrada web shopa
                    </li>
                    <li className="text-left pl-3 pb-2 hover:bg-gray-100 hover:text-red-400">
                      Grafički dizajn
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="space-y-3 pt-2 px-4 font-semibold">
                <li>
                  {" "}
                  <a href="">O nama</a>
                </li>
                <li>
                  {" "}
                  <a href="">Kontakt</a>{" "}
                </li>
                <li>
                  <a href="">Blog</a>{" "}
                </li>
              </ul>
              <div className="text-sm pt-5 pl-4">
                <p>© 2023, epepe.d.o.o.</p>
                <p>Impressum | Politike privatnosti | O kolačićina</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Navbar;
