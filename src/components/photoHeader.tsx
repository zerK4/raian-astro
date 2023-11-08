import axios from "axios";
import { useState, useEffect } from "react";
import {
  AiFillCaretUp,
  AiOutlineClose,
  AiFillCamera,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";
import { SiSlashdot } from "react-icons/si";

export default function PhotoHeader() {
  const [photos, setPhotos] = useState([]);
  const [isHover, setIsHover] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [full, setFull] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchPhotos = async () => {
      const { data } = await axios.get(`/data.json`);
      setPhotos(data);
    };
    fetchPhotos();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    filterHandler();
    setTimeout(() => setIsLoading(false), 1000);
    console.log(filtered.length);
  }, [photos, activeTab]);

  const fullHandler = (item) => {
    if (item <= filtered.length) {
      setFull(item);
    }
  };
  useEffect(() => {
    full
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [full]);

  const filterHandler = (e) => {
    switch (activeTab) {
      case "all":
        setFiltered(photos);
        break;
      case "w":
        setFiltered(photos.filter((photo) => photo.category === "wedding"));
        break;
      case "e":
        setFiltered(photos.filter((photo) => photo.category === "event"));
        break;
      case "f":
        setFiltered(photos.filter((photo) => photo.category === "fashion"));
        break;
    }
  };
  return (
    <div className=''>
      <div className='flex justify-center'>
        <h1 className='sm:text-[10rem] text-[5rem] font-flower text-[#C78665]'>
          Fotografie
        </h1>
      </div>
      <div className='w-full h-fit py-2 bg-neutral-100 mt-10 sm:mt-0 pt-4'>
        <div className='flex justify-center w-full relative md:w-[60%] items-center mx-auto'>
          <FaSlackHash className='text-[6rem] absolute left-0 md:-left-24 text-neutral-400 md:text-neutral-200' />
          <AiFillCamera className='text-[6rem] absolute text-neutral-300 right-0 rotate-45 top-0' />
          <SiSlashdot className='text-[6rem] absolute text-neutral-400 bottom-0 md:bottom-auto md:opacity-10 right-0 md:-right-24' />
          <div className='text-sm bg-neutral-200 bg-opacity-50 p-2 z-20 rounded-md select-none shadow-lg border-2 border-neutral-100 shadow-neutral-400'>
            Descoperă cele mai captivante cadre - Galeria Noastră Foto
            <br />
            <br />
            În secțiunea noastră de Galerie Foto, aducem în prim-plan arta
            noastră captivantă a fotografiei de nuntă. Fiecare imagine din
            această colecție este o fereastră către momentele de neuitat,
            emoțiile autentice și detalii minuțios capturate în cadrul fiecărei
            secvețe pe care am avut privilegiul de a le documenta.
            <br />
            <br />
            De la portretele înduioșătoare ale cuplurilor proaspăt căsătorite
            până la instantaneele pline de viață ale petrecerii și nu numai,
            această galerie ilustrează abilitatea noastră de a transforma
            fiecare moment într-o poveste vizuală. Cu un simț artistic dezvoltat
            și tehnici de ultimă oră, am creat imagini care rămân ca amintiri
            vii.
            <br />
            <br />
            Explorează Galeria Foto pentru a obține o privire asupra calității
            și a stilului nostru distinct. Fiecare fotografie spune o poveste
            unică, iar noi suntem mândri să împărtășim aceste opere de artă cu
            tine.
            <br />
            <br />
            Dacă ești în căutarea unui fotograf sau videograf pentru nunta ta,
            lasă aceste imagini să te convingă de profesionalismul și pasiunea
            noastră pentru acest domeniu. Suntem gata să transformăm viziunea ta
            în realitate.
            <br />
            <br />
            Contactează-ne astăzi pentru a discuta mai multe detalii.
          </div>
        </div>
        <div className='w-full flex justify-center gap-2 h-20 pt-4 relative before:absolute before:w-40 before:h-[2px] before:bg-[#C78665] before:bottom-0 before:rounded-full before:opacity-50'>
          <button
            onMouseOver={() => setIsHover("all")}
            onMouseOut={() => setIsHover("")}
            onClick={(e) => {
              setActiveTab("all");
              filterHandler(e);
            }}
            className={` h p-2 over:text-black movement flex flex-col items-center relative ${
              isHover === "all" ? "-translate-y-2" : "translate-y-0"
            } ${
              activeTab === "all"
                ? "-translate-y-4 text-[#C78665]"
                : "translate-y-0 text-neutral-400"
            }`}
          >
            Toate
            <AiFillCaretUp
              className={`absolute ${
                isHover === "all" || activeTab === "all"
                  ? "opacity-100 translate-y-6 text-[#C78665]"
                  : "opacity-0 translate-y-10"
              } movement`}
            />
          </button>
          <button
            onMouseOver={() => setIsHover("w")}
            onMouseOut={() => setIsHover("")}
            onClick={(e) => {
              setActiveTab("w");
              filterHandler(e);
            }}
            className={` p-2 hover:text-black movement flex flex-col items-center relative ${
              isHover === "w" ? "-translate-y-2" : "translate-y-0"
            } ${
              activeTab === "w"
                ? "-translate-y-4 text-[#C78665]"
                : "translate-y-0 text-neutral-400"
            }`}
          >
            Nuntă
            <AiFillCaretUp
              className={`absolute ${
                isHover === "w" || activeTab === "w"
                  ? "opacity-100 translate-y-6 text-[#C78665]"
                  : "opacity-0 translate-y-10"
              } movement`}
            />
          </button>
          <button
            onMouseOver={() => setIsHover("e")}
            onMouseOut={() => setIsHover("")}
            onClick={(e) => {
              setActiveTab("e");
              filterHandler(e);
            }}
            className={` p-2 hover:text-black movement flex flex-col items-center relative ${
              isHover === "e" ? "-translate-y-2" : "translate-y-0"
            } ${
              activeTab === "e"
                ? "-translate-y-4 text-[#C78665]"
                : "translate-y-0 text-neutral-400"
            }`}
          >
            Eveniment
            <AiFillCaretUp
              className={`absolute ${
                isHover === "e" || activeTab === "e"
                  ? "opacity-100 translate-y-6 text-[#C78665]"
                  : "opacity-0 translate-y-10"
              } movement`}
            />
          </button>
          <button
            onMouseOver={() => setIsHover("f")}
            onMouseOut={() => setIsHover("")}
            onClick={(e) => {
              setActiveTab("f");
              filterHandler(e);
            }}
            className={` p-2 hover:text-black movement flex flex-col items-center relative ${
              isHover === "f" ? "-translate-y-2" : "translate-y-0"
            } ${
              activeTab === "f"
                ? "-translate-y-4 text-[#C78665]"
                : "translate-y-0 text-neutral-400"
            }`}
          >
            Comercială
            <AiFillCaretUp
              className={`absolute ${
                isHover === "f" || activeTab === "f"
                  ? "opacity-100 translate-y-6 text-[#C78665]"
                  : "opacity-0 translate-y-10"
              } movement`}
            />
          </button>
        </div>
        <div className='flex gap-2 px-2 flex-wrap relative justify-center mt-6'>
          <button
            onClick={() => fullHandler("")}
            className={`${
              full
                ? "flex fixed bottom-2 sm:bottom-full sm:top-0 right-2 md:right-0 z-50"
                : "hidden"
            } sm:h-[2rem] h-[4rem] sm:w-[2rem] w-[95%] flex items-center justify-center bg-neutral-900 text-white hover:text-orange-400 movement`}
          >
            <AiOutlineClose />
          </button>
          <div
            onClick={() =>
              full >= 1 ? fullHandler(full + 1) : fullHandler("")
            }
            className={`${
              full
                ? "fixed h-[80%] flex items-center top-20 right-4 cursor-pointer select-none z-50"
                : "hidden"
            }`}
          >
            <button className='p-1 md:p-[3px] movement hover:translate-x-1 shadow-neutral-700 rounded-full'>
              <AiOutlineArrowRight className='text-2xl md:text-3xl text-black' />
            </button>
          </div>
          <div
            onClick={() =>
              full >= 1 ? fullHandler(full - 1) : fullHandler("")
            }
            className={`${
              full
                ? "fixed h-[80%] flex items-center top-20 left-4 cursor-pointer select-none z-50"
                : "hidden"
            }`}
          >
            <button className='p-1 md:p-[3px] movement hover:translate-x-1 shadow-neutral-700 rounded-full'>
              <AiOutlineArrowLeft className='text-2xl md:text-3xl text-neutral-200' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
