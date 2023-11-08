import { useState, useEffect } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Header() {
  const [isHover, setIsHover] = useState("");
  const [navActive, setNavActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navHandler = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    if (navActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navActive]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setScrolling(true) : setScrolling(false);
    });
  }, []);
  return (
    <div
      className={`${
        scrolling === true
          ? "fixed h-14 z-40 bg-opacity-60 backdrop-blur-md"
          : "relative h-[7rem]"
      } w-full bg-black px-2 text-white movement`}
    >
      <div className='flex items-center justify-between mx-auto w-full lg:w-[90%] xl:w-[70%] h-full'>
        <div className='logo'>
          <h1 className='font-flower text-4xl'>Raian Visual</h1>
        </div>
        <button className='md:hidden flex p-2' onClick={navHandler}>
          <AiOutlineMenu className='text-2xl hover:opacity-50 movement' />
        </button>
        <div
          className={`${
            navActive
              ? "translate-y-0 h-fit pb-[100vh]"
              : "-translate-y-[300vw] md:translate-y-0"
          } fixed items-start pt-20 md:pt-0 px-10 z-40 movement bg-neutral-900 h-screen left-0 top-0 flex-col md:flex-row w-screen md:w-auto gap-6 md:bg-transparent md:relative flex md:items-center md:gap-6  md:h-full`}
        >
          <button
            onClick={navHandler}
            className='md:hidden flex absolute top-4 right-4 hover:opacity-50 movement border-2 p-2 border-[#C78665] rounded-full'
          >
            <AiOutlineClose className='text-[#C78665] ' />
          </button>
          <a href='/'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("home")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center'
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "home"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "home"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Home
              </span>
            </button>
          </a>
          <a href='/photo'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("foto")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "foto"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "foto"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Galerie Foto
              </span>
            </button>
          </a>
          <a href='/video'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("video")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "video"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "video"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Galerie Video
              </span>
            </button>
          </a>
          <a href='/desc'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("desc")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "desc"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "desc"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Blog I
              </span>
            </button>
          </a>
          <a href='/blog'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("blog")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "blog"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "blog"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Blog II
              </span>
            </button>
          </a>
          <a href='/offer'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("oferta")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "oferta"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "oferta"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Oferte
              </span>
            </button>
          </a>
          <a href='/policy'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("policy")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "policy"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "policy"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Policy
              </span>
            </button>
          </a>
          <a href='/service'>
            <button
              onClick={() => setNavActive(false)}
              onMouseOver={() => setIsHover("services")}
              onMouseOut={() => setIsHover("")}
              className='md:link h-10 flex gap-2 items-center '
            >
              <AiOutlineArrowRight
                className={`${
                  isHover === "services"
                    ? "translate-x-0 text-[#C78665]"
                    : "-translate-x-[100vw]"
                } movement  flex md:hidden`}
              />
              <span
                className={`${
                  isHover === "services"
                    ? "translate-x-6 opacity-50 md:translate-x-0 md:-translate-y-2"
                    : "translate-x-0"
                } movement `}
              >
                Servicii
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
